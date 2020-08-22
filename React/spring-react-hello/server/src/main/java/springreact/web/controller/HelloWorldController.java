package springreact.web.controller;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.*;
import springreact.web.bean.Greetings;

@RestController
public class HelloWorldController {

    private Logger log = Logger.getLogger(HelloWorldController.class.getName());

    @GetMapping(path = "hello-world")
    @ResponseBody
    public Greetings sayHello() {
        log.info("sayHello");

        return new Greetings("Hello World from Spring!");
    }

}
