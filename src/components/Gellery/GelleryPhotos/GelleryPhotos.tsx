import { useEffect, useState } from "react";
import "../GelleryPhotos/GelleryPhotos.scss";
import ReactPaginate from "react-paginate";
import CrossIcon from "../../../icons/CrossIcon";
import { useTranslation } from "react-i18next";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firebase";

const GelleryPhotos = () => {
  const { t, i18n } = useTranslation();
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentItems, setCurrentItems] = useState<any>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentImage, setCurrentImage] = useState("");
  const [isGalModal, setIsGalModal] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [galleryImages, setGalleryImages] = useState<any>([]);

  useEffect(() => {
    const colRef = collection(db, "gallery_photos");
    getDocs(colRef)
      .then((snapshot) => {
        let gallery: any = [];
        snapshot.docs.forEach((doc) => {
          gallery.push({ ...doc.data(), id: doc.id });
        });
        gallery = gallery.sort((a: any, b: any) => a.id - b.id);
        console.log(gallery);
        setGalleryImages(gallery);
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(gallery.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(gallery.length / itemsPerPage));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    resortPages(endOffset);
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % galleryImages.length;
    setItemOffset(newOffset);
  };

  const resortPages = (endOffset: any) => {
    setCurrentItems(galleryImages.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(galleryImages.length / itemsPerPage));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setItemsPerPage(8);
        setShowBtn(false);
      }
      if (window.innerWidth <= 1600 && window.innerWidth >= 650) {
        setItemsPerPage(6);
        setShowBtn(false);
      }
      if (window.innerWidth <= 650) {
        setItemsPerPage(4);
        setShowBtn(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let width = window.innerWidth;
    if (width >= 1300) {
      setItemsPerPage(8);
      setShowBtn(false);
    }
    if (width <= 1300 && width >= 650) {
      setItemsPerPage(6);
      setShowBtn(false);
    }
    if (width <= 650) {
      setItemsPerPage(4);
      setShowBtn(true);
    }
  }, []);

  return (
    <div className="GelleryPhotos">
      <h1 className="GelleryPhotosTitle">{t("Photo")}</h1>
      {isGalModal ? (
        <div className="GalleryModal">
          <div className="GalleryModalOverlay" onClick={() => setIsGalModal(false)}></div>
          <div className="GalleryModalBody">
            <div className="GalleryHeader">
              <button className="GalleryHeaderClose" onClick={() => setIsGalModal(false)}>
                <CrossIcon></CrossIcon>
              </button>
            </div>
            <img src={process.env.PUBLIC_URL + currentImage} alt="" className="ModalImage" />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="GelleryPhotosBody">
        {currentItems &&
          currentItems.map((item: any) => (
            <div
              className="GelleryPhotosItem"
              onClick={() => {
                if (!showBtn) {
                  setCurrentImage(item.img);
                  setIsGalModal(true);
                }
              }}
            >
              <img src={process.env.PUBLIC_URL + item.img} alt="" loading="lazy" />
              <div className="GalleryPhotosItemText">
                <h1>{t("HomeProjectSmallTitle")}</h1>
                <h2>{item.subtitle}</h2>
                <p>{item.description}</p>
                {showBtn ? (
                  <button
                    className="GelleryPhotosItemBtn"
                    onClick={() => {
                      setCurrentImage(item.img);
                      setIsGalModal(true);
                    }}
                  >
                    {i18n.language === "en" ? "View" : "Дивитися"}
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
      </div>
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageClassName="GelleryPhotosPaginationButton"
        pageLinkClassName="GelleryPhotosPaginationLink"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="GelleryPhotosPagination"
        activeClassName="activePag"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default GelleryPhotos;
