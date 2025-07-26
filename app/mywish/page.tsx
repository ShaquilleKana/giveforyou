import Flower from "@/components/flower"

export default function MyWishPage() {
  return (
    <div
      style={{
        backgroundColor: "rgb(177, 134, 141)",
        minHeight: "100vh",
        color: "#ffffff",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Flower arrangements */}
      <div className="circle-container-top flex justify-center items-center relative rounded-full transform translate-y-[10%]">
        <div className="love flex mr-60">
          <Flower />
          <Flower />
        </div>
        <Flower />
      </div>

      <div className="circle-container flex justify-center items-center relative rounded-full transform -translate-y-1/2">
        <div className="love1 flex mr-30">
          <Flower />
          <Flower />
        </div>
        <Flower />
        <Flower />
      </div>

      <div className="circle-container flex justify-center items-center relative rounded-full transform -translate-y-1/2">
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
      </div>

      <div className="circle-container1 flex justify-center items-center relative rounded-full transform -translate-y-1/2">
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
      </div>

      <div className="circle-container2 flex justify-center items-center relative rounded-full transform -translate-y-1/2">
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
      </div>

      <div className="circle-container3 flex justify-center items-center relative rounded-full transform -translate-y-1/2">
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
      </div>

      <div className="circle-container3 flex justify-center items-center relative rounded-full transform -translate-y-1/2">
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
      </div>

      <div className="circle-container3 flex justify-center items-center relative rounded-full transform -translate-y-1/2">
        <Flower />
        <Flower />
        <Flower />
      </div>

      <div className="circle-container3 flex justify-center items-center relative rounded-full transform -translate-y-1/2">
        <Flower />
      </div>
    </div>
  )
}
