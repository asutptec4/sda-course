# Task5

## Identifying

| Principle | Example |
| ----------- | ----------- |
| Single Responsibility Principle | [Class that is responsible only for browser navigation](https://github.com/angular/angular/blob/main/packages/common/src/location/platform_location.ts#L115) |
| Open/Closed Principle | [Chain of responsibility pattern satisfy the principle](https://github.com/angular/angular/blob/main/packages/common/http/src/interceptor.ts#L44) | 
| Liskov Substitution Principle | [Builtin value accessors in that module like DefaultValueAccessor satisfy](https://github.com/angular/angular/blob/main/packages/forms/src/directives/control_value_accessor.ts#L23) | 
| Interface Segregation Principle | [Each hook is defined as standalone interface](https://github.com/angular/angular/blob/main/packages/core/src/interface/lifecycle_hooks.ts) | 
| Dependency Inversion Principle | [In all consumer places interface is used instead of implementation](https://github.com/angular/angular/blob/main/packages/core/src/di/injector.ts#L44) | 


## Violation

| Principle | Example |
| ----------- | ----------- |
| Single Responsibility Principle | [Do several things: form headers, parse different responses. Way to fix - use composition to delegate these works](https://github.com/angular/angular/blob/main/packages/common/http/src/client.ts#L486-L603) |
| Open/Closed Principle | [Large interface. Adding more methods causes cascade changes in classes which implements the interface. Way to fix - use smaller interfaces](https://github.com/angular/angular/blob/main/packages/compiler-cli/src/ngtsc/partial_evaluator/src/dynamic.ts#L209) | 
| Liskov Substitution Principle | [Return type of validate method is changes. AsyncValidator subclasses can't replace Validator subclasses. Way to fix - don't use inheritance](https://github.com/angular/angular/blob/main/packages/forms/src/directives/validators.ts#L302) | 
| Interface Segregation Principle | [Some methods have no implementation. Way to fix - use smaller interfaces](https://github.com/angular/angular/blob/main/packages/animations/browser/src/dsl/animation_timeline_builder.ts#L155-L165) | 
| Dependency Inversion Principle | [Use concrete class in constructor. Way to fix - make an interface](https://github.com/angular/angular/blob/main/packages/compiler/src/jit_compiler_facade.ts#L35) | 