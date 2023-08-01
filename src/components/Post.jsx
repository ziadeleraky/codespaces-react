const names = ['Ziad', 'Eleraky']
const Post = () => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <>
      <h1>{chosenName}</h1>
      <p>made with ❤️</p>
    </>
  );
};

export default Post;
