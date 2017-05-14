package cn.com.itrus.raapi;

import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceFeature;
import javax.xml.ws.Service;

import cn.com.itrus.Config;

/**
 * This class was generated by Apache CXF 2.6.8
 * 2014-11-27T15:03:58.127+08:00
 * Generated source version: 2.6.8
 * 
 */
@WebServiceClient(name = "UserAPIService", 
                  wsdlLocation = "http://123.57.32.150/TopCA/services/userAPI?wsdl",
                  targetNamespace = "http://service.ra.tca.topca.cn/") 
public class UserAPIService extends Service {

    public final static URL WSDL_LOCATION;

    public final static QName SERVICE = new QName("http://service.ra.tca.topca.cn/", "UserAPIService");
    public final static QName UserAPIServicePort = new QName("http://service.ra.tca.topca.cn/", "UserAPIServicePort");
    static {
        URL url = null;
        try {
            url = new URL(new Config().getURL());
        } catch (MalformedURLException e) {
            java.util.logging.Logger.getLogger(UserAPIService.class.getName())
                .log(java.util.logging.Level.INFO, 
                     "Can not initialize the default wsdl from {0}", new Config().getURL());
        }
        WSDL_LOCATION = url;
    }

    public UserAPIService(URL wsdlLocation) {
        super(wsdlLocation, SERVICE);
    }

    public UserAPIService(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public UserAPIService() {
        super(WSDL_LOCATION, SERVICE);
    }
    
    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
    //compliant code instead.
   // public UserAPIService(WebServiceFeature ... features) {
        //super(WSDL_LOCATION, SERVICE, features);
   // }

    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
    //compliant code instead.
    //public UserAPIService(URL wsdlLocation, WebServiceFeature ... features) {
    //    super(wsdlLocation, SERVICE, features);
   // }

    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
    //compliant code instead.
    //public UserAPIService(URL wsdlLocation, QName serviceName, WebServiceFeature ... features) {
    //    super(wsdlLocation, serviceName, features);
    //}

    /**
     *
     * @return
     *     returns UserAPIServicePortType
     */
    @WebEndpoint(name = "UserAPIServicePort")
    public UserAPIServicePortType getUserAPIServicePort() {
        return super.getPort(UserAPIServicePort, UserAPIServicePortType.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns UserAPIServicePortType
     */
    @WebEndpoint(name = "UserAPIServicePort")
    public UserAPIServicePortType getUserAPIServicePort(WebServiceFeature... features) {
        return super.getPort(UserAPIServicePort, UserAPIServicePortType.class, features);
    }

}
