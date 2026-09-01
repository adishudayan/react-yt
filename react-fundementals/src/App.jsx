import Card from './components/Card';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <>
      <Navbar />
      <div className="parent">
        <Card
          title="My First Card"
          description="This is my first card"
          category="Healthcare"
          img="https://plus.unsplash.com/premium_photo-1710117797127-624a10ec4e4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="My Second Card"
          description="This is my second card"
          category="Manufacturing"
          img="https://plus.unsplash.com/premium_photo-1755883199872-2d31c8b8b012?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="My Third Card"
          description="This is my third card"
          category="Technology"
          img="https://plus.unsplash.com/premium_photo-1710787193487-9e7f43c02551?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
};

export default App;
