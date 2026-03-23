import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Fade,
  IconButton,
  Chip,
} from "@mui/material";
import {
  Refresh as RefreshIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@mui/icons-material";
import Page from "../components/ui/Page";

interface Quote {
  text: string;
  author: string;
  category: string;
}

const motivationalQuotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Work",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Motivation",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Dreams",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    category: "Action",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "Future",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "Perseverance",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "Confidence",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "Life",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "Action",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "Leadership",
  },
];

const MotivationalQuotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(
    () =>
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)],
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const getRandomQuote = () => {
    setFadeIn(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
      setCurrentQuote(motivationalQuotes[randomIndex]);
      setIsFavorite(false);
      setFadeIn(true);
    }, 300);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Page title="Daily Inspiration" fullWidth>
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          p: 3,
        }}
      >
        <Fade in={fadeIn} timeout={500}>
          <Card
            elevation={4}
            sx={{
              maxWidth: 600,
              width: "100%",
              borderRadius: 3,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              position: "relative",
              overflow: "visible",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h4"
                component="blockquote"
                sx={{
                  fontStyle: "italic",
                  mb: 3,
                  fontWeight: 300,
                  lineHeight: 1.4,
                  position: "relative",
                  "&::before": {
                    content: '"\\201C"',
                    fontSize: "4rem",
                    position: "absolute",
                    left: -20,
                    top: -10,
                    opacity: 0.3,
                  },
                }}
              >
                {currentQuote.text}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 500,
                  opacity: 0.9,
                }}
              >
                — {currentQuote.author}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Chip
                  label={currentQuote.category}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    fontWeight: 500,
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={getRandomQuote}
                  startIcon={<RefreshIcon />}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  New Quote
                </Button>

                <IconButton
                  onClick={toggleFavorite}
                  sx={{
                    color: isFavorite ? "#ff6b6b" : "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      color: "#ff6b6b",
                    },
                  }}
                >
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Fade>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            opacity: 0.7,
            maxWidth: 400,
          }}
        >
          Start your day with inspiration. Click "New Quote" to discover more
          wisdom from great minds.
        </Typography>
      </Box>
    </Page>
  );
};

export default MotivationalQuotes;
