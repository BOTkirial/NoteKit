abstract class GenericRequest {
  public static route: string;
  public static Get?: (parameters: any) => Promise<any>;
  public static Post?: (parameters: any) => Promise<any>;
  public static Patch?: (parameters: any) => Promise<any>;
  public static Delete?: (parameters: any) => Promise<any>;
}

export default GenericRequest;
