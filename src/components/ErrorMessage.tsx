interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="text-red-400 p-4 border border-red-900 rounded">
      {message}
    </div>
  );
}