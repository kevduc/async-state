type AlertProps = {
  error: unknown;
};

export function Alert({ error }: AlertProps) {
  return (
    <p className="max-w-fit rounded-lg bg-red-800 px-4 py-2 font-medium text-stone-100 shadow hover:bg-red-900">
      {error instanceof Error
        ? `Error: ${error.message}`
        : "Something went wrong"}
    </p>
  );
}
