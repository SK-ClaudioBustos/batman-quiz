const batmanQuizLegends = {
    Noob: "You might want to revisit Gotham; your Bat-signals are a bit dim!",
    Average: "You're starting to piece together the Bat-mystery, but there’s still a lot to uncover.",
    Expert: "You know Gotham better than most. Keep training, detective!",
    Master: "Impressive! You have nearly mastered the Bat-legacy. Just a step away from perfection!",
    DarkKnight: "You are the true Dark Knight, protector of Gotham and keeper of its secrets!"
};

export const getQuizLegend = (score: number) => {
    let rank: keyof typeof batmanQuizLegends = "Master";

    if (score <= 10) {
        rank = "Noob";
    }

    if (score > 10 && score <= 30) {
        rank = "Average";
    }

    if (score > 30 && score <= 45) {
        rank = "Expert";
    }

    if (score > 45 && score <= 49) {
        rank = "Master";
    }

    return batmanQuizLegends[rank];
};