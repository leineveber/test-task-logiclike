interface Props {
  error: Error;
}

export const ErrorState = ({ error }: Props) => {
  // add some nice styled and explained error component
  return (
    <div>
      <span>{error.message}</span>
    </div>
  );
};
