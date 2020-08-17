export default (delay: number, ...args: Array<undefined>) => {
  return (target: unknown, Key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const method = descriptor.value
    descriptor.value = function () {
      let timer: number;
      return () => {
        const context = (this as unknown);
        
        clearTimeout(timer);
        timer = setTimeout(() => {
          method.apply(context, args);
        }, delay || 250)
      }
    }
    return descriptor
  }
};
