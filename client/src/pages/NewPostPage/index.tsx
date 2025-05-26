import React, { useRef, useEffect, useState, FormEvent } from 'react';
import styles from "./NewPostPage.module.scss";
import useUser from 'hooks/globalState/userLoggedState';
import { useCreatePost } from 'hooks/post/useCreatePost';
import UploadWidget from 'components/share/UploadWidget';
import { uwConfig as defaultUwConfig } from 'constants/uploadWidget';
import { useNavigate } from 'react-router-dom';




function NewPostPage() {

  const [value, setValue] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { user } = useUser()
  const form = useRef<HTMLFormElement>(null)
  const { newPost, isLoading, error , success, postSaved} = useCreatePost()

  const navigate = useNavigate();


  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollHeight, 200)}px`;
    }
  }, [value]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     if (images.length < 4) {
    alert("You must upload at least 4 images.");
    return;
  }

    const formData = new FormData(e.currentTarget);
    const inputs = Object.fromEntries(formData.entries()) as Record<string, string>;

    if (!user?.id) {
      console.error("No user ID found. Cannot create post.");
      return;
    }
     const postData = {
      title: inputs.title,
      price: parseInt(inputs.price),
      address: inputs.address,
      city: inputs.city.toLocaleLowerCase(),
      bedroom: parseInt(inputs.bedroom),
      bathroom: parseInt(inputs.bathroom),
      type: inputs.type as "buy" | "rent",
      property: inputs.property as "apartment" | "house" | "condo" | "land",
      latitude: inputs.latitude,
      longitude: inputs.longitude,
      images: images,
    };

    // Preparar postDetail solo si hay algún valor
    const postDetailFields = {
      utilities: inputs.utilities || undefined,
      pet: inputs.pet || undefined,
      income: inputs.income || undefined,
      size: inputs.size ? parseInt(inputs.size) : undefined,
      school: inputs.school ? parseInt(inputs.school) : undefined,
      bus: inputs.bus ? parseInt(inputs.bus) : undefined,
      restaurant: inputs.restaurant ? parseInt(inputs.restaurant) : undefined,
      desc: value
    };

    // Verifica si postDetail tiene algún campo con valor
    const hasPostDetail = Object.values(postDetailFields).some(v => v !== undefined && v !== "");

    try {
      await newPost(
        {
          postData: postData,
          postDetail: hasPostDetail ? postDetailFields : undefined,
        },
        user.id
      );

      console.log("Post created!");
      // Puedes redirigir o resetear el formulario aquí
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const secundarySubmit = () => {
    if (form.current) {
      form.current.requestSubmit();
    }
  }

  const dynamicUwConfig = {
    ...defaultUwConfig,
    multiple: true,
    folder: "posts",
  };

  useEffect(() => {
  if (success && postSaved) {
    navigate(`/post/${postSaved.id}`);
  }
}, [success, postSaved]);

  return (
    <div className={styles.newPostPage}>
      <div className={styles.formContainer}>
        <h1>Add New Post</h1>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit} ref={form}>
            <div className={styles.item}>
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" required />
            </div>
            <div className={styles.item}>
              <label htmlFor="price">Price (USD)</label>
              <input id="price" name="price" type="number" required />
            </div>
            <div className={styles.item}>
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" required />
            </div>
            <div className={`${styles.item} ${styles.description}`}>
              <label htmlFor="desc">Description</label>
              <div className={styles.container}>
                <textarea
                  ref={textareaRef}
                  className={styles.editor}
                  placeholder="Write a description..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
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
              <label htmlFor="size">Total Size (mts2)</label>
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
            {error && <span className={styles.error}>{error}</span>}
          </form>
        </div>
      </div>
      <div className={styles.sideContainer}>
        {images.length === 0 &&
          <h2>Please add images</h2>
        }
        {images.map((image, index) => (
          <img src={image} key={index} alt={`Uploaded ${index}`} />
        ))}
        <UploadWidget
          uwConfig={dynamicUwConfig}
          setState={setImages}
        />

      </div>
      <button className={styles.sendButton_md} onClick={secundarySubmit}>Add</button>
    </div>
  );
}

export default NewPostPage;