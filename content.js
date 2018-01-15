$(document).ready(function() {
    let sheet = (function() {
        let style = document.createElement("style");
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        return style.sheet;
    })();
    //Disable score on the 'schedule' page
    sheet.insertRule(".MatchStatus-score { filter: blur(10px); background-color: #000; font-weight: 500 !important; }");
    //Disable score and winner on match details page
    sheet.insertRule(".TeamScore-score { opacity: 0.01 !important; }");
    //Disable won/lost count on the standings page
    sheet.insertRule(".Standings-details { filter: blur(10px); background-color: #000; font-weight: 500 !important; }");
    //Disable the news header
    sheet.insertRule(".PageHead--article { filter: blur(20px); }")
    //Disable news section
    $('[data-analytics-placement="recent-news"]').children().css("filter", "blur(20px)");
});
