export default function MainPage({ history }) {
  return (
    <>
      <div>Main Page!</div>
      <button
        onClick={() => {
          history.push('/page1');
        }}
      >
        go to page1
      </button>
    </>
  );
}
