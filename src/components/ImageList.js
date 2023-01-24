import ImageShow from "./ImageShow";
function ImageList({ images }){

    const renderedImages = images.map((image,index)=>{
        return <ImageShow key={index} imageData = {image} />;
    });

    return (

        <div>
            <div>{renderedImages}</div>
        </div>

    );
}
export default ImageList;