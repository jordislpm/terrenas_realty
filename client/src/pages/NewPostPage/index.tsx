import styles from "./NewPostPage.module.scss";

function NewPostPage() {
 return (
    <div className={styles.newPostPage}>
      <div className={styles.formContainer}>
        <h1>Add New Post</h1>
        <div className={styles.wrapper}>
          <form onSubmit={()=>{}}>
            <div className={styles.item}>
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" required />
            </div>
            <div className={styles.item}>
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" required />
            </div>
            <div className={styles.item}>
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" required />
            </div>
            <div className={`${styles.item} ${styles.description}`}>
              <label htmlFor="desc">Description</label>
              {/* <ReactQuill theme="snow" onChange={setValue} value={value} /> */}
            </div>
            <div className={styles.item}>
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" required />
            </div>
            <div className={styles.item}>
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" required />
            </div>
            <div className={styles.item}>
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" required />
            </div>
            <div className={styles.item}>
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" required />
            </div>
            <div className={styles.item}>
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" required />
            </div>
            <div className={styles.item}>
              <label htmlFor="type">Type</label>
              <select name="type" required>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="property">Property</label>
              <select name="property" required>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" required>
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" required>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="income">Income Policy</label>
              <input id="income" name="income" type="text" placeholder="Income Policy" />
            </div>
            <div className={styles.item}>
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className={styles.item}>
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className={styles.item}>
              <label htmlFor="bus">Bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className={styles.item}>
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className={styles.sendButton}>Add</button>
            {/* {error && <span className={styles.error}>{error}</span>} */}
          </form>
        </div>
      </div>
      <div className={styles.sideContainer}>
        {/* {images.map((image, index) => (
          <img src={image} key={index} alt={`Uploaded ${index}`} />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        /> */}
      </div>
    </div>
  );
}

export default NewPostPage;