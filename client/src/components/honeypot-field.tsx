type HoneypotFieldProps = {
  name?: string;
};

export function HoneypotField({ name = "companyWebsite" }: HoneypotFieldProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden"
    >
      <label htmlFor={name}>Leave this field empty</label>
      <input
        id={name}
        type="text"
        name={name}
        tabIndex={-1}
        autoComplete="off"
        inputMode="url"
      />
    </div>
  );
}
