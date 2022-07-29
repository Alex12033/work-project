const sectioQuestion = require("../section-questions-acc"),
sectioFeaturesQuestion = require("../section-features-acardeon"),
timer = require("../modal-timer"),
modalWindow = require("../modal-window/modal"),
getInputModal = require("../get-input-modal"),
mainSlider = require("../reviews-carousel/reviews-carousel");


mainSlider();
getInputModal();
modalWindow();
timer();
sectioFeaturesQuestion();
sectioQuestion();