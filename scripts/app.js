//service-modal code
//the diffrent developers cards becomes developers
const devs = document.getElementsByClassName("card");
// when you press, close the modual
const closeServiceModal = () => {
  document.getElementById("service-modal-wrapper").style.display = "none";
};

/*When you press,
call on all "service-cards" and store them in "cards"
depending on the cards you press and its index open it but...
*/
const openServiceModal = () => {
  const cards = document.getElementsByClassName("service-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      document.getElementById("service-modal-wrapper").style.display = "flex";

      /*...Depending on what id the card has display it in "service-modal-wrapper" IF it MATCHES with the id of the developer, and any remaning dev that is displayed will set to none*/
      for (let j = 0; j < devs.length; j++) {
        if (cards[i].id === devs[j].id) {
          console.log(devs[j]);
          devs[j].style.display = "block";
        } else {
          devs[j].style.display = "none";
        }
      }
    });
  }
};

window.addEventListener("load", openServiceModal);

// Get the modal
const modal = document.getElementById("myModal");

// Retrieving the image and then we insert it to our modal

const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
let lastClicked = null;
// Here we settle a click function for our large/small image and the modal.
function klickar(largeImage, miniBild) {
  const bild = document.getElementById(largeImage);
  const smallImage = document.getElementById(miniBild);
  const modal = document.getElementById("myModal");
  const modalImgOne = document.getElementById("img01");

  // This if statement checks if there has been a previously clicked image.
  // When there has been no pictures selected (we just arrived to the page) then it's null.
  // If picture is not equal to null then our remove function will run.
  if (lastClicked != null) {
    lastClicked.classList.remove("modal-section");
    //console.log("Here");
  }
  // here we set the lastClicked image to the now clicked image
  lastClicked = smallImage;

  // here we apply the css rule to our new lastClicked image.
  smallImage.classList.add("modal-section");
  modal.style.display = "block";
  console.log(modalImgOne);
  modalImgOne.src = bild.src;

  // here we set a simple function that closes our modal with span element X when clicked and turns the display to "none"
  const span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
}
