export default function EquallySpacedItems() {
  return (
    <div className="flex gap-4 justify-center overflow-x-auto whitespace-nowrap">
      <img className="object-cover w-60" src="/image.jpg" />
      <img className="object-cover w-60" src="/image-1.jpg" />
      <img className="object-cover w-60" src="/image-2.jpg" />
    </div>
  )
}