import React, { useState, useCallback, useContext } from "react";
import C1 from "../../components/images/sports.jpg";
import C2 from "../../components/images/nft-image1.jpg";
import C3 from "../../components/images/Screenshot (134).png";
import C4 from "../../components/images/music.png";
import NFT from "../../components/images/nft_1.png";
import { useDropzone } from "react-dropzone";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
const CreateContent = () => {
  const [active, setActive] = useState(0);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalities, setRoyalities] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("");
  const [properties, setProperties] = useState("");
  const [image, setImage] = useState(null);

  const { uploadToIpfs, createNft } = useContext(NFTMarketplaceContext);

  const [fileUrl, setFileUrl] = useState(null);
  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToIpfs(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
    console.log(url);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  const categoryArray = [
    {
      image: C1,
      category: "Sports     category",
    },
    {
      image: C2,
      category: "Art    category  ",
    },
    {
      image: C3,
      category: "Entertainment",
    },
    {
      image: C4,
      category: "Photograpghy",
    },
  ];

  return (
    <div
      className="container "
      style={{ textAlign: "left", padding: "5rem", marginRight: "5rem" }}
    >
      <h3>Create New Item</h3>
      <p style={{ color: "gray" }}>
        You can set preferred display name, create your profile URL and manage
        other personal settings.
      </p>
      <hr className="my-5" />

      <h5>Image, Video, or 3D Model</h5>
      <p style={{ color: "gray" }}>
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3. Max size: 100
        MB.
      </p>

      <div class="dotted-border-box my-5">
        <button className="btn  glow-on-hover my-3" {...getRootProps()}>
          Upload a File
        </button>
        <br />
        <small style={{ color: "gray" }}>PNG, JPG, GIF up to 10MB</small>
      </div>

      <div class="dotted-border-box my-5">
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <img
              src={fileUrl}
              width={250}
              height={250}
              style={{ borderRadius: "3rem" }}
              alt=" ***Your NFT image***"
            />
          </div>
          <div className="col-md-9 my-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center flex-wrap">
                <p className="mx-4">
                  <b>Nft Name: </b>
                  <span>{name}</span>
                </p>
                <p className="mx-4">
                  <b>Website: </b>
                  <span>{website}</span>
                </p>
                <p className="mx-4">
                  <b>Category: </b>
                  <span>{category}</span>
                </p>
              </div>

              <div className="d-flex justify-content-center ">
                <p className="mx-4">
                  <b>Royalties: </b>
                  <span>{royalities}</span>
                </p>
                <p className="mx-4">
                  <b>Size: </b>
                  <span>{fileSize}</span>
                </p>
                <p className="mx-4">
                  <b>Properties: </b>
                  <span>{price}</span>
                </p>
              </div>
              <p>
                <b>Description: </b>
                <span>{description}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <form style={{ padding: "1rem" }}>
        <div className="form-group">
          <label for="name">
            <b>Item Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            style={{ borderRadius: "3rem" }}
          />
        </div>
        <div className="form-group">
          <label for="link">
            <b>External Link</b>
          </label>
          <input
            type="link"
            className="form-control"
            id="link"
            placeholder="https://"
            onChange={(e) => setWebsite(e.target.value)}
            style={{ borderRadius: "3rem" }}
          />
          <small style={{ color: "gray" }}>
            NFT SHOP will include a link to this URL on this item's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </small>
        </div>
        <div className="form-group">
          <label for="description">
            <b>Description</b>
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
            style={{ borderRadius: "1rem" }}
          ></textarea>
          <small style={{ color: "gray" }}>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </small>
        </div>
      </form>
      <hr className="my-4" />
      <h4>Select Your Category</h4>
      <small style={{ color: "gray" }}>Choose your Category</small>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4s my-5">
        {categoryArray.map((el, i) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div
              className="card custom-card"
              style={{
                backgroundColor: "#80808012",
                borderRadius: "2rem",
              }}
              key={i + 1}
              onClick={() => setCategory(el.category)}
            >
              <img
                className="card-img-top"
                src={el.image}
                alt="img"
                width={286}
                height={160}
                style={{ borderRadius: "1.5rem" }}
              />

              <div className="card-body d-flex align-items-center">
                <div
                  style={{
                    lineHeight: ".4",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                  className="mx-2"
                >
                  <hr />
                  <div className="address-box2">
                    <p className="address my-2">{el.category}</p>

                    <button className="border-button2">Category</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-4" />

      <div className="row">
        <div className="col-md-4">
          <p>
            <b>Royalties</b>
          </p>
          <input
            type="text"
            className="form-control"
            id="royalties"
            placeholder="20%"
            onChange={(e) => setRoyalities(e.target.value)}
            style={{ borderRadius: "3rem" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            <b>Size</b>
          </p>
          <input
            type="text"
            className="form-control"
            id="size"
            placeholder="156Mb"
            onChange={(e) => setFileSize(e.target.value)}
            style={{ borderRadius: "3rem" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            <b>Price</b>
          </p>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            style={{ borderRadius: "3rem" }}
          />
        </div>
      </div>

      <hr className="my-4" />
      <div className="my-3" style={{ textAlign: "center" }}>
        <button
          className="btn  glow-on-hover mx-3 my-1"
          onClick={async () =>
            createNft(
              name,
              price,
              description,
              image
              // website,
              // royalities,
              // fileSize,
              // category
            )
          }
        >
          Upload
        </button>
        <button className="btn  glow-on-hover mx-3 my-1">Preview</button>
      </div>
    </div>
  );
};

export default CreateContent;
