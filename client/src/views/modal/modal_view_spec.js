const jsdom = require("mocha-jsdom");
const expect = require("chai").expect;
const Modal = require("./modal_view");

describe("Modal", function() {
  jsdom({
    url: "http://localhost"
  });

  before(function() {
    this.modal = new Modal(
      "150px",
      "150px",
      "0.9",
      document.createElement("div")
    );
  });

  describe("stability", function() {
    it("renders without crashing", function() {
      this.modal.render();
    });
  });

  describe("valid content", function() {
    it("has a div as it's content node", function() {
      expect(this.modal.content.nodeName).eql("DIV");
    });
  });

  describe("backdrop", function() {
    before(function() {
      this.backdrop = document.getElementById("modal-backdrop");
    });

    it("renders a fullscreen backdrop", function() {
      expect(this.backdrop).to.not.be.undefined;
      expect(this.backdrop).to.not.be.null;
    });

    describe("backdrop dimensions", function() {
      it("should have a width of 100vw", function() {
        expect(this.backdrop.style.width).to.eql("100vw");
      });
      it("should have a height of 100vh", function() {
        expect(this.backdrop.style.height).to.eql("100vh");
      });
      it("should have an opacity of 0.9", function() {
        expect(this.backdrop.style.opacity).to.eql("0.9");
      });
    });

    describe("backdrop click", function() {
      xit("should close the modal when the backdrop is clicked", function() {});
    });
  });
});
