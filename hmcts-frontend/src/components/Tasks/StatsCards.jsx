import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

const StatsCards = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const pending = tasks.filter((t) => t.status === "pending").length;

  const cards = [
    { title: "Total Tasks", value: total, color: "#1976d2" },      
    { title: "Completed", value: completed, color: "#2e7d32" },    
    { title: "Pending", value: pending, color: "#ed6c02" },        
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card
            sx={{
              width:350,
              backgroundColor: card.color,
              color: "#fff",
              borderRadius: 3,
              boxShadow: 4,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 8,
              },
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {card.title}
              </Typography>
              <Typography variant="h3" sx={{ mt: 1, fontWeight: "bold" }}>
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;