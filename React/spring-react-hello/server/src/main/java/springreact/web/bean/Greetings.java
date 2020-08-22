package springreact.web.bean;

public class Greetings {

    private String message;

    public Greetings(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
