$(() => {
    $("#like-question").on('click', () => {
        const questionId = $("#like-question").data('question-id');
        $.post('/questions/addquestionlike', { questionId }, () => {
            updateLikes();
            $("#like-question").prop('disabled', true);
        });
    });

    const updateLikes = () => {
        const questionId = $("#likes-count").data('question-id');
        $.get('/questions/getlikes', { questionId }, result => {
            $("#likes-count").text(result.likes);
        });
    }

    setInterval(updateLikes, 1000);
});