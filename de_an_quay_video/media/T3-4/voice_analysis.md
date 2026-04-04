# Voice Analysis - Nguyen Huu Thien Nhan

Analyzed 2026-04-04 using librosa pyin pitch detection + spectral analysis on 3 recordings (intro 19.6s, main speech 67.5s, ending 28.6s).

## Pitch Profile

| Metric | Intro | Main Speech | Ending |
|--------|-------|-------------|--------|
| Mean F0 | 123.9 Hz (B2) | 208.6 Hz (G#3) | 124.3 Hz (B2) |
| Median F0 | 122.8 Hz | 147.7 Hz | 127.8 Hz |
| Min | 99.7 Hz (G2) | 102.0 Hz (G#2) | 100.9 Hz (G2) |
| Max | 165.8 Hz (E3) | 647.9 Hz (E5) | 138.6 Hz (C#3) |
| Std | 18.3 Hz | 149.6 Hz | 12.2 Hz |
| Range | 66.1 Hz | 545.9 Hz | 37.7 Hz |

- **Voice type:** Baritone (B2 fundamental, 124 Hz)
- **Speaking range:** G2 - E5 (nearly 3 octaves in free speech)
- **Prepared text range:** G2 - C#3 (half octave, monotone)

## Timbre & Spectral

| Metric | Intro | Main Speech | Ending |
|--------|-------|-------------|--------|
| Spectral centroid | 1934 Hz | 1619 Hz | 1978 Hz |
| Spectral rolloff (85%) | 3364 Hz | 2711 Hz | 3414 Hz |
| Zero crossing rate | 0.1136 | 0.0931 | 0.1210 |
| Harmonic-to-noise ratio | 0.88 | 0.85 | 0.96 |

- **Mid-dominant voice** - most energy in 400-2000 Hz band
- **Low breathiness** (ZCR 0.09-0.12) - clean vocal cord closure
- **Decent harmonic clarity** (HNR 0.85-0.96)

## Dynamics

| Metric | Intro | Main Speech | Ending |
|--------|-------|-------------|--------|
| RMS mean | 0.1564 | 0.1532 | 0.1598 |
| RMS std | 0.0694 | 0.0762 | 0.0644 |
| Dynamic ratio | 2.29 | 2.49 | 2.04 |
| Voiced frames | 10.3% | 16.6% | 4.8% |

- **Flat dynamics** (ratio 2.0-2.5) - speaks at consistent volume
- **Low voiced percentage** - recording quality issue (phone mic + quiet environment)

## Comparison with Team Members

| Member | Mean F0 | Note | Centroid | ZCR | HNR | Dynamic Ratio |
|--------|---------|------|----------|-----|-----|---------------|
| **Nhan (main)** | **208.6 Hz** | **G#3** | **1619** | **0.0931** | **0.85** | **2.49** |
| Phu | 78.0 Hz | D#2 | 668 | 0.0231 | 8.90 | 1.86 |
| Thuc Nhi | 310.8 Hz | D#4 | 1739 | 0.1101 | 0.67 | 4.26 |
| To Nhu | 209.2 Hz | G#3 | 983 | 0.0345 | 2.37 | 3.69 |
| Y Nhu | 204.0 Hz | G#3 | 1666 | 0.0746 | 2.19 | 3.81 |

## MFCC Timbre Fingerprint (Main Speech)

```
MFCC coefficients (13): [-136.4, 133.9, -58.6, -11.0, -7.6, -47.2, -14.1, -22.1, -23.8, -0.5, -19.5, -3.0, -4.2]
```

## Summary

- **Strengths:** 3-octave speaking range (unusual flexibility), clean voice (low breathiness), well-defined pitch, confident delivery with minimal hesitation
- **Weaknesses:** Flat dynamics (one-volume speaker), monotone in prepared text, phone mic masks vocal character
- **Singing potential:** Baritone with raw pitch flexibility. Would suit acoustic/ballad style. Needs dynamic control training and head voice development
