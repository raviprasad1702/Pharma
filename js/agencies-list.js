textfunc = (text) => {
  if (text == null || text == "" || text == "Select an Agency") return;
};

initSelect2 = () => {
  $("#agencyList").select2({
    placeholder: "Select an Agency",
    templateSelection: function (data, container) {
      $(data.element).attr("data-custom-attribute", data.customValue);
      textfunc(data.text.trim());
      return data.text;
    },
  });
};

$(document).ready(() => {
  initSelect2();
});

$(window).on("resize", () => {
  initSelect2();
});
