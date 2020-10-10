export function setTimelinePopups() {
  $(window).resize(function() {
    setPopupsOffsets();
  });

  $(document).ready(function() {
    $('.timeline-item').each(function(index, value) {
      setPopupPlacement(this, index);
    });

    $('.timeline-item').popover('show');
    $('.timeline-content-subheader').addClass('text-muted');

    setPopupsOffsets();
  });
}

function setPopupPlacement(currentItem, index) {
  var content = $(currentItem).find('.timeline-content');
  $(content).css("display", "none");

  $(currentItem).popover({
    html: true,
    content: content.html(),
    sanitize: false,
    placement: index % 2 == 0
      ? "left"
      : "right"
  });
}

function setPopupsOffsets() {
  var allPopupsHeightSum = 0;
  var popupsCount = 0;
  const iconHeight = 50;

  var areAllPopupsOnOneSide = $('.timeline').css("margin-right") !== "0px";

  $('.timeline-item').each(function(index, value) {
    var currentPopoverId = '#' + $(value).attr('aria-describedby');
    var heightOfCurrentElement = $(currentPopoverId).height();

    if (index === 0) {
      SetMarginForFirstElement(value, heightOfCurrentElement, iconHeight);
      allPopupsHeightSum += heightOfCurrentElement;
    }
    else {
      SetMarginForNonFirstElement(value, heightOfCurrentElement, areAllPopupsOnOneSide);
      allPopupsHeightSum += (areAllPopupsOnOneSide
        ? heightOfCurrentElement
        : (heightOfCurrentElement / 2));
    }

    ++popupsCount;
  });

  $('.timeline').css("height", (allPopupsHeightSum + ((popupsCount + 1) * iconHeight)));
}

function SetMarginForFirstElement(value, heightOfCurrentElement, iconHeight)
{
  var margin = ((heightOfCurrentElement) / 2) - (iconHeight / 2);
  SetTopMargin(value, margin)
}

function SetMarginForNonFirstElement(value, heightOfCurrentElement, areAllPopupsOnOneSide)
{
  var previousPopoverId = '#' + $(value).prev().attr('aria-describedby');
  var heightOfPreviousElement = $(previousPopoverId).height();

  var divider = areAllPopupsOnOneSide
    ? 2
    : 4;
  var margin = (heightOfCurrentElement + heightOfPreviousElement) / divider;

  SetTopMargin(value, margin)
}

function SetTopMargin(domElement, marginValue)
{
  $(domElement).css("margin-top", marginValue + "px");
}
