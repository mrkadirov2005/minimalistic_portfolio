"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, Typography, Chip, Grid, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";

type CourseType = "online" | "university";
type StatusType = "completed" | "in-progress";
type FilterType = "all" | StatusType;

interface Course {
  id: string;
  title: string;
  provider?: string;
  type: CourseType;
  status: StatusType;
}

const onlineCourses: Course[] = [
  { id: "mohirdev-frontend", title: "Mohirdev Frontend Practicum", provider: "Mohirdev", type: "online", status: "completed" },
  { id: "dave-backend", title: "Beginner to Pro Backend (Node.js)", provider: "Dave Gray", type: "online", status: "completed" },
  { id: "dave-ts", title: "TypeScript Mastery", provider: "Dave Gray", type: "online", status: "completed" },
  { id: "mosh-next", title: "Next.js Masterclass", provider: "Mosh Hamedani", type: "online", status: "completed" },
  { id: "dave-ts-next-redux", title: "TypeScript + Next.js + Redux", provider: "Dave Gray", type: "online", status: "completed" },
  { id: "fcc-dsa", title: "Data Structures & Algorithms in JavaScript", provider: "FreeCodeCamp", type: "online", status: "completed" },
];

export default function OnlineCourses() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredCourses = onlineCourses.filter(course => {
    if (filter === "all") return true;
    return course.status === filter;
  });

  const filterOptions: FilterType[] = ["all", "completed", "in-progress"];

  return (
    <div style={{ padding: "24px" }}>
      {/* Filter Buttons */}
      <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: "wrap", gap: "8px" }}>
        {filterOptions.map(f => (
          <Button
            key={f}
            variant={filter === f ? "contained" : "outlined"}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </Stack>

      {/* Online Course Cards */}
      <Grid container spacing={3}>
        {filteredCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                sx={{
                  boxShadow: 3,
                  "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
                  transition: "all 0.3s ease",
                }}
              >
                <CardHeader
                  title={<Typography variant="h6">{course.title}</Typography>}
                  subheader={course.provider && <Typography variant="body2" color="text.secondary">{course.provider}</Typography>}
                />
                <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Chip
                    label={course.status === "completed" ? "✅ Completed" : "⏳ In Progress"}
                    color={course.status === "completed" ? "success" : "warning"}
                    variant="outlined"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
