// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
  // this is targeting the option elements values. So there are other elements like options, labels, selection and instead of them being assigned a class or id they have values and that's what this variable is targeting.
  //console.log(subType);
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
  //console.log(subDuration);
});

var updateSubscriptionDiv = function (e) {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen ${subDuration} month ${subType} plan for $${total}.`;
};
