$(() => {
    $("#like-question").on('click', () => {
        const questionId = $("#like-question").data('question-id');
        $.post('/questions/addquestionlike', { questionId }, () => {
            updateLikes();
            //$("#like-question").prop('disabled', true);
            $("#like-question").removeClass('glyphicon-heart-empty');
            $("#like-question").addClass('glyphicon-heart');
            $("#like-question").unbind('click');
        });
    });

    const updateLikes = () => {
        const questionId = $("#likes-count").data('question-id');
        $.get('/questions/getlikes', { questionId }, result => {
            $("#likes-count").text(result.likes);
        });
    };

    setInterval(updateLikes, 1000);
});