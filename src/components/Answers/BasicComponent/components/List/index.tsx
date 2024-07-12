interface IListProps {
  data: { id: number, value: string }[]
}

export default function List({ data }: IListProps) {
  return (
    <ul className="text-ghost-white">
      {data.map((item: any) => <li key={item.id}>{item.value}</li>)}
    </ul>
  )
}