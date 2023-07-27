export const useDefaultProps = <P extends object, DP extends Partial<P>>(
   props: P,
   defaultProps: DP
): DP & P => ({
   ...defaultProps,
   ...props,
});
