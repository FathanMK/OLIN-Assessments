interface ICodeProps {
  code: string
}

export default function Code({ code }: ICodeProps) {
  return (
    <div className="bg-[#2d2d2d] rounded-md p-4">
      <pre>
        <code className="language-ts rounded">{code}</code>
      </pre>
    </div>
  )
}