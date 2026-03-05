import { Grid, Card, CardContent, Typography } from "@mui/material";

const StatsCards = ({ tasks }) => {

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "completed").length;
  const pending = tasks.filter(t => t.status === "pending").length;

  const cards = [
    { title: "Total Tasks", value: total },
    { title: "Completed", value: completed },
    { title: "Pending", value: pending }
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {cards.map((card, index) => (
        <Grid item xs={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="h4">{card.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;