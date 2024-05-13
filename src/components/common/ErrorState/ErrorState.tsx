interface Props {
  error: Error;
}

export const ErrorState = ({ error }: Props) => {
  return (
    <div>
      <span>{error.message}</span>
    </div>
  );
};
