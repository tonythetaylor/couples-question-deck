export function isUserCancelledShare(err: unknown) {
  const anyErr = err as any;
  const name = anyErr?.name;
  const message = String(anyErr?.message ?? "");
  return (
    name === "AbortError" ||
    name === "NotAllowedError" ||
    /abort/i.test(message) ||
    /canceled|cancelled|cancel/i.test(message)
  );
}