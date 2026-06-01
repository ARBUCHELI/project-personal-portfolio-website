(function () {
  "use strict";

  var ROOT_MARGIN = "400px 0px";
  var isLocalHost =
    location.hostname === "localhost" || location.hostname === "127.0.0.1";

  function isExternalUrl(url) {
    return /^https?:\/\//i.test(url);
  }

  function imageWidth(img) {
    if (img.classList.contains("profile-image")) return 400;
    if (img.classList.contains("about-logos")) return 280;
    if (img.classList.contains("icon-image")) return 100;
    if (img.classList.contains("project-image")) return 900;
    if (img.classList.contains("pop") || img.closest(".gallery")) return 560;
    if (img.classList.contains("diploma-image") || img.closest(".education")) return 800;
    return 720;
  }

  function buildImageUrl(originalSrc, img) {
    if (!originalSrc || originalSrc.indexOf("data:") === 0) return originalSrc;
    if (originalSrc.indexOf("/.netlify/images") !== -1) return originalSrc;
    if (isLocalHost) return originalSrc;

    var width = imageWidth(img);
    var params =
      "url=" +
      encodeURIComponent(originalSrc) +
      "&w=" +
      width +
      "&fit=inside&fm=webp&q=82";

    if (isExternalUrl(originalSrc)) {
      return "/.netlify/images?" + params;
    }

    var path = originalSrc.charAt(0) === "/" ? originalSrc : "/" + originalSrc.replace(/^\.\//, "");
    return "/.netlify/images?url=" + encodeURIComponent(path) + "&w=" + width + "&fit=inside&fm=webp&q=82";
  }

  function shouldLoadEager(img) {
    if (img.dataset.eager === "true") return true;
    if (img.classList.contains("profile-image")) return true;
    if (img.getAttribute("fetchpriority") === "high") return true;
    return false;
  }

  function loadImage(img) {
    var src = img.dataset.src;
    if (!src) return;

    img.src = buildImageUrl(src, img);
    img.removeAttribute("data-src");
    img.classList.remove("lazy-img");

    if (img.decode) {
      img.decode().catch(function () {});
    }
  }

  function initLazyImages() {
    var images = document.querySelectorAll("img:not([data-lazy-init])");

    images.forEach(function (img) {
      img.dataset.lazyInit = "true";

      var src = img.getAttribute("src");
      if (!src) return;

      if (shouldLoadEager(img)) {
        img.loading = "eager";
        img.fetchPriority = "high";
        img.decoding = "async";
        img.src = buildImageUrl(src, img);
        return;
      }

      img.dataset.src = src;
      img.removeAttribute("src");
      img.loading = "lazy";
      img.decoding = "async";
      img.classList.add("lazy-img");
    });

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("img[data-src]").forEach(loadImage);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          loadImage(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: ROOT_MARGIN, threshold: 0.01 }
    );

    document.querySelectorAll("img[data-src]").forEach(function (img) {
      observer.observe(img);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLazyImages);
  } else {
    initLazyImages();
  }
})();
