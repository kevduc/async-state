type AlertProps = {
  error: unknown;
};

export function Alert({ error }: AlertProps) {
  return (
    <p className="mt-6 max-w-fit py-2 pe-2 ps-1 font-medium text-red-400 hover:bg-red-900">
      ⚠️{" "}
      {error instanceof Error
        ? `Error: ${error.message}`
        : "Something went wrong"}
    </p>
  );
}
