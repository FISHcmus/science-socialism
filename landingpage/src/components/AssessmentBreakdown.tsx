import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type AssessmentItem = {
  component: string;
  weight: string;
  detail: string;
};

type AssessmentBreakdownProps = {
  continuous?: AssessmentItem[];
  finalWeight?: string;
  finalDetail?: string;
};

const defaultContinuous: AssessmentItem[] = [
  { component: "Midterm Exam", weight: "20%", detail: "Essay" },
  { component: "Discussion", weight: "10%", detail: "Group discussion participation" },
  { component: "Group Presentation", weight: "10%", detail: "Video 7-15 min" },
  { component: "Attendance", weight: "10%", detail: "Class attendance" },
];

export const AssessmentBreakdown: React.FC<AssessmentBreakdownProps> = ({
  continuous = defaultContinuous,
  finalWeight = "50%",
  finalDetail = "Essay, 60 phút, được sử dụng tài liệu giấy",
}) => (
  <Card className="constructivist-frame border-0">
    <CardHeader>
      <span className="section-label text-xs">Assessment Structure</span>
      <div className="accent-line w-[40%]" />
    </CardHeader>
    <CardContent className="space-y-6">
      <div>
        <h3 className="font-heading font-bold text-xl text-foreground mb-3">Continuous (50%)</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-heading">Component</TableHead>
              <TableHead className="font-heading w-20">Weight</TableHead>
              <TableHead className="font-heading">Detail</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {continuous.map((item, i) => (
              <TableRow key={i}>
                <TableCell className="font-body">{item.component}</TableCell>
                <TableCell className="font-heading font-bold text-primary">{item.weight}</TableCell>
                <TableCell className="font-body text-muted-foreground">{item.detail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <h3 className="font-heading font-bold text-xl text-foreground mb-2">Final Exam ({finalWeight})</h3>
        <p className="font-body text-base text-muted-foreground">{finalDetail}</p>
      </div>
    </CardContent>
  </Card>
);
