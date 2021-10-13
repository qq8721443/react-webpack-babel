export default function Page1({ history }) {
  return (
    <>
      <div>Page 1!</div>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        go to main
      </button>
    </>
  );
}
