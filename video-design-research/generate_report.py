#!/usr/bin/env python3
"""Generate markdown report from design system research results."""

import json
import os
import re
import yaml

RESULTS_DIR = os.path.join(os.path.dirname(__file__), "results")
FIELDS_PATH = os.path.join(os.path.dirname(__file__), "fields.yaml")
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "report.md")

TOC_FIELDS = ["distraction_level", "differentiation", "dark_vs_light_mode_viability"]
INTERNAL_FIELDS = {"_source_file", "uncertain", "name", "summary"}


def slugify(name: str) -> str:
    return re.sub(r"[^a-z0-9-]", "", name.lower().replace(" ", "-").replace("/", "-"))


def truncate(text: str, max_len: int = 60) -> str:
    text = str(text).replace("\n", " ").strip()
    if len(text) <= max_len:
        return text
    return text[:max_len-3] + "..."


def format_value(val, indent=0) -> str:
    if val is None or val == "":
        return "_N/A_"
    if isinstance(val, str):
        if "[uncertain]" in val:
            return "_[uncertain]_"
        if len(val) > 150:
            return f"\n{'  ' * indent}> {val}"
        return val
    if isinstance(val, (int, float, bool)):
        return str(val)
    if isinstance(val, list):
        if not val:
            return "_empty_"
        if all(isinstance(v, dict) for v in val):
            lines = []
            for item in val:
                parts = [f"**{k}**: {v}" for k, v in item.items()]
                lines.append(f"{'  ' * indent}- " + " | ".join(parts))
            return "\n" + "\n".join(lines)
        if all(isinstance(v, str) for v in val):
            if sum(len(v) for v in val) < 100:
                return ", ".join(val)
            return "\n" + "\n".join(f"{'  ' * indent}- {v}" for v in val)
        return ", ".join(str(v) for v in val)
    if isinstance(val, dict):
        lines = []
        for k, v in val.items():
            formatted = format_value(v, indent + 1)
            if "\n" in formatted:
                lines.append(f"{'  ' * indent}- **{k}**:{formatted}")
            else:
                lines.append(f"{'  ' * indent}- **{k}**: {formatted}")
        return "\n" + "\n".join(lines)
    return str(val)


def load_fields():
    with open(FIELDS_PATH) as f:
        data = yaml.safe_load(f)
    fields = []
    for field in data.get("fields", []):
        fields.append(field["name"])
    return fields


def load_results():
    items = []
    for fname in sorted(os.listdir(RESULTS_DIR)):
        if not fname.endswith(".json"):
            continue
        with open(os.path.join(RESULTS_DIR, fname)) as f:
            data = json.load(f)
        data["_source_file"] = fname
        items.append(data)
    return items


def is_uncertain(field_name, data):
    uncertain_list = data.get("uncertain", [])
    if field_name in uncertain_list:
        return True
    val = data.get(field_name)
    if isinstance(val, str) and "[uncertain]" in val:
        return True
    return False


def generate():
    fields = load_fields()
    items = load_results()

    lines = []
    lines.append("# Design System Research Report")
    lines.append("")
    lines.append(f"**Topic**: Best design system/theme for Vietnamese academic presentation video")
    lines.append(f"**Candidates evaluated**: {len(items)}")
    lines.append(f"**Fields per candidate**: {len(fields)}")
    lines.append("")

    # TOC
    lines.append("## Table of Contents")
    lines.append("")
    for i, item in enumerate(items, 1):
        name = item.get("name", item["_source_file"])
        slug = slugify(name)
        toc_parts = []
        for tf in TOC_FIELDS:
            val = item.get(tf, "?")
            label = tf.replace("_", " ").title()
            toc_parts.append(f"{label}: {truncate(str(val), 50)}")
        toc_str = " | ".join(toc_parts)
        lines.append(f"{i}. [{name}](#{slug}) - {toc_str}")
    lines.append("")

    # Detailed sections
    lines.append("---")
    lines.append("")
    for item in items:
        name = item.get("name", item["_source_file"])
        summary = item.get("summary", "")
        slug = slugify(name)

        lines.append(f"## {name}")
        lines.append("")
        if summary:
            lines.append(f"*{summary}*")
            lines.append("")

        # Defined fields
        for field in fields:
            if is_uncertain(field, item):
                continue
            val = item.get(field)
            if val is None or val == "":
                continue
            label = field.replace("_", " ").title()
            formatted = format_value(val)
            if "\n" in formatted:
                lines.append(f"### {label}")
                lines.append(formatted)
            else:
                lines.append(f"**{label}**: {formatted}")
            lines.append("")

        # Extra fields (in JSON but not in fields.yaml)
        extra_keys = set(item.keys()) - set(fields) - INTERNAL_FIELDS
        if extra_keys:
            lines.append("### Other Info")
            for key in sorted(extra_keys):
                val = item.get(key)
                if val is None or val == "":
                    continue
                label = key.replace("_", " ").title()
                formatted = format_value(val)
                if "\n" in formatted:
                    lines.append(f"**{label}**:{formatted}")
                else:
                    lines.append(f"**{label}**: {formatted}")
                lines.append("")

        # Uncertain fields
        uncertain = item.get("uncertain", [])
        if uncertain:
            lines.append("**Uncertain fields**:")
            for u in uncertain:
                lines.append(f"- {u}")
            lines.append("")

        lines.append("---")
        lines.append("")

    report = "\n".join(lines)
    with open(OUTPUT_PATH, "w") as f:
        f.write(report)
    print(f"Report generated: {OUTPUT_PATH}")
    print(f"Items: {len(items)}, Fields: {len(fields)}")


if __name__ == "__main__":
    generate()
