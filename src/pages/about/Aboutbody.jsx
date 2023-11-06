import "./styles/aboutbody.css";
import gong1 from "../../assets/images/gong1.svg";
import gong2 from "../../assets/images/gong2.svg";
import gong3 from "../../assets/images/gong3.svg";

const Abouthero = () => {
  return (
    <>
      <div className="ab-main">
        {/* <div className="abb-1">
          <img src={gong1} alt="gong" className="gongs-img" />
          <p className="ab-2">About Us</p>
        </div> */}
        {/* <p className="ab-2">
          <img src={gong1} alt="gong" className="gongs-img" />
          About Us
        </p> */}
        <div className="cattt">
          <div className="ttt">
            <p className="ab-2">About Us</p>
          </div>
          <div className="rrr">
            <img src={gong1} alt="gong" className="gongs-img" />
          </div>
        </div>

        <p className="ab-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nisi nulla, rutrum non lorem a, bibendum venenatis libero. Vivamus
          mollis eleifend diam, id elementum eros egestas sed. Phasellus at
          elementum turpis. Etiam at erat fermentum, vehicula neque tempor,
          accumsan enim. Nulla sit amet risus at purus lobortis auctor vel eget
          nisi. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Aenean libero sapien, lobortis quis placerat
          varius, rutrum tincidunt risus. Sed ullamcorper tellus sit amet neque
          hendrerit imperdiet.
        </p>
        <p className="ab-3">
          Curabitur vitae felis id dui tempor semper. Aliquam sit amet elit non
          enim fermentum tempor. Maecenas dapibus dignissim libero, sit amet
          interdum nisi convallis vel. Integer erat lacus, dignissim quis augue
          eget, auctor egestas erat. Mauris eu nulla massa. Etiam a semper
          velit. Mauris consequat sapien id mi pretium, at tristique arcu
          gravida. Ut cursus tellus vitae lorem semper, eu euismod nisl mollis.
          Nulla malesuada eros eget ex dictum eleifend.
        </p>
        <div className="abb-a">
          <div className="gonggg">
            <img src={gong2} alt="gong" className="gongs-imgg" />
          </div>
        </div>
        <p className="ab-3">
          Praesent sed enim at quam accumsan dapibus. Proin pretium neque urna,
          id porttitor ligula imperdiet ut. Morbi at fermentum diam. Nullam elit
          erat, hendrerit vitae luctus sed, bibendum ac eros. Etiam semper erat
          ac elit pulvinar, convallis convallis mauris tincidunt. Nunc dui
          augue, pharetra eget imperdiet eu, consectetur a neque. Nam pretium
          viverra augue non vulputate. Maecenas sed tempor neque, nec viverra
          lectus. Mauris quis massa a enim fermentum dictum maximus a odio.
          Proin eu diam sit amet magna sagittis consequat. Aenean volutpat enim
          in ex dictum mattis. Pellentesque non vestibulum dolor, quis dignissim
          nisi. Nunc diam nunc, laoreet eget nulla vitae, porttitor viverra
          lorem. Duis id semper felis, at suscipit massa. Phasellus ut nibh
          accumsan, vestibulum leo id, aliquet erat. Pellentesque euismod
          hendrerit dui, at bibendum arcu mattis eu. Vestibulum elementum, nibh
          bibendum hendrerit tempus, nisi nunc accumsan libero, vitae ultrices
          sapien est ac erat. Vivamus sit amet tristique augue, lobortis viverra
          dolor. Praesent nec metus at turpis viverra tristique eu eu metus.
          Vestibulum porttitor tincidunt condimentum. Nam quis suscipit justo.
          Integer auctor vel nibh eu accumsan.
        </p>
        <div className="abb-a">
          <div className="gonggg2">
            <img src={gong3} alt="gong" className="gongs-imgg" />
          </div>
        </div>
        <p className="ab-3">
          Vestibulum hendrerit vehicula aliquet. Mauris volutpat tortor eget
          lorem blandit, a bibendum tortor tristique. Suspendisse sed neque sed
          enim pellentesque suscipit. Praesent mauris metus, facilisis et metus
          ut, commodo pellentesque neque. Quisque quis nulla enim. Duis euismod
          purus in dignissim finibus. Fusce lacinia nunc quis urna fringilla
          cursus. Aliquam bibendum lacus in vulputate sodales. Proin euismod
          mauris et mi eleifend egestas.
        </p>
      </div>
    </>
  );
};

export default Abouthero;
