import { useEffect, useState } from "react";
import "../GelleryPhotos/GelleryPhotos.scss";
import ReactPaginate from "react-paginate";
import CrossIcon from "../../../icons/CrossIcon";

const GelleryPhotos = () => {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentItems, setCurrentItems] = useState<any>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentImage, setCurrentImage] = useState("");
  const [isGalModal, setIsGalModal] = useState(false);

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
      }
      if (window.innerWidth <= 1300 && window.innerWidth >= 650) {
        setItemsPerPage(6);
      }
      if (window.innerWidth <= 650) {
        setItemsPerPage(4);
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
    }
    if (width <= 1300 && width >= 650) {
      setItemsPerPage(6);
    }
    if (width <= 650) {
      setItemsPerPage(4);
    }
  }, []);

  return (
    <div className="GelleryPhotos">
      <h1 className="GelleryPhotosTitle">Фото</h1>
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
                setCurrentImage(item.src);
                setIsGalModal(true);
              }}
            >
              <img src={process.env.PUBLIC_URL + item.src} alt="" />
              <div className="GalleryPhotosItemText">
                <h1>Наш проект</h1>
                <h2>{item.subtitle}</h2>
                <p>{item.description}</p>
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

const galleryImages = [
  {
    src: "/Gallery/gal5.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal2.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal3.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal4.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal1.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal6.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal7.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal8.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal2.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal3.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal4.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal5.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal6.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal7.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal8.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal1.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal3.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal4.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal5.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal6.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal7.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal8.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal1.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    src: "/Gallery/gal2.webp",
    subtitle: "LOREM HOUSE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];
