// Preset definitions and rule generation logic for all supported AI IDEs

export const IDE_OPTIONS = [
    { id: 'cursor', name: 'Cursor', file: '.cursorrules', icon: '🖱️' },
    { id: 'windsurf', name: 'Windsurf', file: '.windsurfrules', icon: '🏄' },
    { id: 'claude', name: 'Claude Code', file: 'CLAUDE.md', icon: '🤖' },
    { id: 'copilot', name: 'GitHub Copilot', file: '.github/copilot-instructions.md', icon: '🐙' },
    { id: 'cline', name: 'Cline', file: '.clinerules', icon: '⚡' },
    { id: 'zed', name: 'Zed AI', file: '.zed/rules', icon: '⚙️' },
    { id: 'aider', name: 'Aider', file: '.aider.conf.yml', icon: '🔧' },
    { id: 'continue', name: 'Continue.dev', file: '.continuerc.json', icon: '▶️' },
    { id: 'devin', name: 'Devin AI', file: 'devin.md', icon: '🧠' },
    { id: 'amazonq', name: 'Amazon Q', file: '.amazonq/rules', icon: '📦' },
    { id: 'bolt', name: 'Bolt.new', file: 'bolt.instructions.md', icon: '⚡' },
    { id: 'lovable', name: 'Lovable', file: 'lovable.instructions.md', icon: '💜' },
    { id: 'replit', name: 'Replit AI', file: '.replit/ai-rules', icon: '🔄' },
    { id: 'augment', name: 'Augment Code', file: 'augment-guidelines.md', icon: '🚀' },
    { id: 'jetbrains', name: 'JetBrains AI', file: 'guidelines.md', icon: '🧩' },
];

export const TOGGLE_OPTIONS = [
    { id: 'typescript_strict', label: 'Strict TypeScript', default: true, desc: 'Enforce strict type checking' },
    { id: 'no_any', label: 'No `any` Type', default: true, desc: 'Disallow the `any` type' },
    { id: 'prefer_const', label: 'Prefer const', default: true, desc: 'Use `const` over `let` when possible' },
    { id: 'functional', label: 'Prefer Functions', default: false, desc: 'Prefer function components over classes' },
    { id: 'no_comments', label: 'Minimal Comments', default: false, desc: 'Only add comments for complex logic' },
    { id: 'error_handling', label: 'Explicit Error Handling', default: true, desc: 'Always handle errors explicitly' },
    { id: 'early_return', label: 'Early Returns', default: true, desc: 'Prefer early returns to reduce nesting' },
    { id: 'descriptive_names', label: 'Descriptive Names', default: true, desc: 'Use descriptive variable and function names' },
    { id: 'small_functions', label: 'Small Functions', default: true, desc: 'Keep functions focused and under 50 lines' },
    { id: 'immutable', label: 'Immutability Preferred', default: false, desc: 'Prefer immutable data patterns' },
];

export const PRESETS = [
    {
        id: 'nextjs-typescript',
        name: 'Next.js + TypeScript',
        icon: '▲',
        description: 'App Router, Server Components, TypeScript strict mode',
        tags: ['React', 'TypeScript', 'SSR', 'App Router'],
        category: 'fullstack',
        language: 'TypeScript',
        framework: 'Next.js',
        rules: {
            role: 'You are an expert Next.js developer using the App Router, React Server Components, and TypeScript.',
            stack: ['Next.js (App Router)', 'React 19', 'TypeScript (strict mode)', 'CSS Modules'],
            conventions: [
                'Use the App Router with file-based routing inside `app/` directory.',
                'Default to React Server Components. Only add `"use client"` when the component needs interactivity, hooks, or browser APIs.',
                'Use TypeScript strict mode. Never use `any`. Define interfaces for all props and data.',
                'Use `next/image` for all images and `next/link` for navigation.',
                'Fetch data in Server Components using `async/await` directly, not `useEffect`.',
                'Use `loading.tsx` and `error.tsx` for route-level loading and error states.',
                'Use `generateMetadata()` for dynamic SEO metadata.',
                'Place shared layouts in `layout.tsx` files.',
                'Keep components small and focused — one component per file.',
                'Use CSS Modules for styling. File: `ComponentName.module.css`.',
            ],
            avoid: [
                'Do not use the Pages Router (`pages/` directory).',
                'Do not use `useEffect` for data fetching in Server Components.',
                'Do not use `any` type. Always define proper types.',
                'Do not put `"use client"` on components that don\'t need it.',
                'Do not use inline styles. Use CSS Modules instead.',
            ],
        },
    },
    {
        id: 'react-tailwind',
        name: 'React + Tailwind CSS',
        icon: '⚛️',
        description: 'React with Tailwind CSS utility classes and hooks',
        tags: ['React', 'Tailwind', 'Hooks', 'Vite'],
        category: 'frontend',
        language: 'TypeScript',
        framework: 'React',
        rules: {
            role: 'You are an expert React developer using Tailwind CSS for styling and modern React patterns.',
            stack: ['React 19', 'Tailwind CSS v4', 'TypeScript', 'Vite'],
            conventions: [
                'Use functional components with hooks exclusively.',
                'Use Tailwind CSS utility classes for all styling. Avoid custom CSS unless absolutely necessary.',
                'Keep components small, focused, and reusable.',
                'Use TypeScript interfaces for all props.',
                'Use `useState`, `useReducer` for local state, and context for shared state.',
                'Use `React.memo()` for expensive pure components.',
                'Extract reusable logic into custom hooks prefixed with `use`.',
                'Use `clsx` or `cn` utility for conditional class names.',
                'File naming: PascalCase for components, camelCase for utilities.',
            ],
            avoid: [
                'Do not use class components.',
                'Do not use inline styles.',
                'Do not use CSS-in-JS libraries (styled-components, emotion).',
                'Do not mutate state directly.',
                'Do not use `any` type.',
            ],
        },
    },
    {
        id: 'python-fastapi',
        name: 'Python + FastAPI',
        icon: '🐍',
        description: 'Modern Python API with type hints and async support',
        tags: ['Python', 'FastAPI', 'Async', 'Pydantic'],
        category: 'backend',
        language: 'Python',
        framework: 'FastAPI',
        rules: {
            role: 'You are an expert Python developer specializing in FastAPI, async programming, and clean architecture.',
            stack: ['Python 3.12+', 'FastAPI', 'Pydantic v2', 'SQLAlchemy', 'Uvicorn'],
            conventions: [
                'Use type hints for ALL function parameters and return types.',
                'Use Pydantic models for request/response validation.',
                'Use async/await for I/O-bound operations (database, HTTP calls).',
                'Follow PEP 8 style guide strictly.',
                'Use dependency injection with FastAPI\'s `Depends()`.',
                'Structure: routers/, models/, schemas/, services/, core/ directories.',
                'Use HTTPException for error responses with proper status codes.',
                'Write docstrings for all public functions and classes.',
                'Use environment variables via `pydantic-settings` for configuration.',
            ],
            avoid: [
                'Do not use synchronous database calls in async endpoints.',
                'Do not put business logic in route handlers — use service layer.',
                'Do not use `*args, **kwargs` without proper type hints.',
                'Do not catch broad exceptions without re-raising or logging.',
                'Do not hardcode secrets or config values.',
            ],
        },
    },
    {
        id: 'go-gin',
        name: 'Go + Gin',
        icon: '🐹',
        description: 'Go web API with Gin framework and clean architecture',
        tags: ['Go', 'Gin', 'REST', 'Clean Arch'],
        category: 'backend',
        language: 'Go',
        framework: 'Gin',
        rules: {
            role: 'You are an expert Go developer building REST APIs with Gin and following Go idioms.',
            stack: ['Go 1.23+', 'Gin web framework', 'GORM', 'Viper (config)'],
            conventions: [
                'Follow standard Go project layout: cmd/, internal/, pkg/.',
                'Handle errors explicitly. Always check returned errors.',
                'Use interfaces for dependency injection and testability.',
                'Return errors rather than panicking.',
                'Use context.Context for cancellation and deadlines.',
                'Group related types in the same package.',
                'Use meaningful variable names. Short names only for small scopes.',
                'Write table-driven tests.',
                'Use struct tags for JSON serialization.',
            ],
            avoid: [
                'Do not use `panic()` for normal error handling.',
                'Do not ignore returned errors.',
                'Do not use global mutable state.',
                'Do not write overly long functions. Keep them focused.',
                'Do not use `init()` functions unless absolutely necessary.',
            ],
        },
    },
    {
        id: 'nodejs-express',
        name: 'Node.js + Express',
        icon: '🟢',
        description: 'Node.js REST API with Express and TypeScript',
        tags: ['Node.js', 'Express', 'TypeScript', 'REST'],
        category: 'backend',
        language: 'TypeScript',
        framework: 'Express',
        rules: {
            role: 'You are an expert Node.js developer building REST APIs with Express and TypeScript.',
            stack: ['Node.js 22+', 'Express.js', 'TypeScript', 'Prisma ORM', 'Zod'],
            conventions: [
                'Use TypeScript strict mode for all source files.',
                'Structure: routes/, controllers/, services/, middleware/, types/.',
                'Use Zod for request validation and type inference.',
                'Use async/await with proper error handling via middleware.',
                'Use environment variables via `dotenv` or `env-schema`.',
                'Use a centralized error handling middleware.',
                'Return consistent JSON response format: { success, data, error }.',
                'Use proper HTTP status codes for all responses.',
                'Use Prisma for type-safe database access.',
            ],
            avoid: [
                'Do not use callbacks — use async/await.',
                'Do not use `any` type.',
                'Do not put business logic in route handlers.',
                'Do not use `var` — use `const` and `let`.',
                'Do not catch errors without logging or re-throwing.',
            ],
        },
    },
    {
        id: 'vue-nuxt',
        name: 'Vue.js + Nuxt 3',
        icon: '💚',
        description: 'Vue 3 with Nuxt 3 and Composition API',
        tags: ['Vue', 'Nuxt', 'TypeScript', 'Composition API'],
        category: 'fullstack',
        language: 'TypeScript',
        framework: 'Nuxt',
        rules: {
            role: 'You are an expert Vue.js developer using Nuxt 3 with the Composition API and TypeScript.',
            stack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Pinia', 'UnoCSS'],
            conventions: [
                'Use the Composition API with `<script setup>` syntax exclusively.',
                'Use TypeScript for type safety in all components.',
                'Use Nuxt auto-imports — do not manually import `ref`, `computed`, `useFetch`, etc.',
                'Use file-based routing in `pages/` directory.',
                'Use `useFetch` or `useAsyncData` for data fetching.',
                'Use Pinia stores for global state management.',
                'Use `defineProps` and `defineEmits` with TypeScript generics.',
                'Keep components small and use composables for shared logic.',
            ],
            avoid: [
                'Do not use Options API.',
                'Do not use Vuex — use Pinia instead.',
                'Do not use `any` type.',
                'Do not manually import auto-imported functions.',
            ],
        },
    },
    {
        id: 'rust-actix',
        name: 'Rust + Actix Web',
        icon: '🦀',
        description: 'Rust web API with Actix Web and strong typing',
        tags: ['Rust', 'Actix', 'Async', 'Systems'],
        category: 'backend',
        language: 'Rust',
        framework: 'Actix Web',
        rules: {
            role: 'You are an expert Rust developer building web services with Actix Web.',
            stack: ['Rust (latest stable)', 'Actix Web', 'SQLx', 'Serde', 'Tokio'],
            conventions: [
                'Use strong typing for all data structures with `serde` derive macros.',
                'Use `Result<T, E>` for error handling, never `unwrap()` in production code.',
                'Use async/await with Tokio runtime.',
                'Structure: handlers/, models/, services/, config/, errors/.',
                'Use custom error types implementing `ResponseError`.',
                'Use extractors (Json, Path, Query) for request parsing.',
                'Write unit tests inline with `#[cfg(test)]` modules.',
                'Use `tracing` crate for structured logging.',
            ],
            avoid: [
                'Do not use `unwrap()` or `expect()` in production paths.',
                'Do not clone data unnecessarily — use references.',
                'Do not use `unsafe` unless absolutely required and documented.',
                'Do not ignore compiler warnings.',
            ],
        },
    },
    {
        id: 'django-python',
        name: 'Django + Python',
        icon: '🎸',
        description: 'Python web application with Django and best practices',
        tags: ['Python', 'Django', 'ORM', 'Templates'],
        category: 'fullstack',
        language: 'Python',
        framework: 'Django',
        rules: {
            role: 'You are an expert Python/Django developer following Django best practices and conventions.',
            stack: ['Python 3.12+', 'Django 5', 'Django REST Framework', 'PostgreSQL'],
            conventions: [
                'Follow Django\'s "fat models, thin views" principle.',
                'Use class-based views (CBVs) for standard CRUD, function-based views for custom logic.',
                'Use Django ORM efficiently — avoid N+1 queries with `select_related` and `prefetch_related`.',
                'Use Django REST Framework serializers for API data validation.',
                'Use Django\'s built-in auth system and permissions.',
                'Write model methods for business logic.',
                'Use Django migrations for all database schema changes.',
                'Use `settings.py` split into base, development, production.',
                'Use type hints for all function signatures.',
            ],
            avoid: [
                'Do not write raw SQL unless absolutely necessary.',
                'Do not put business logic in views — use models or services.',
                'Do not use `from module import *`.',
                'Do not hardcode URLs — use `reverse()` or `{% url %}`.',
            ],
        },
    },
    {
        id: 'flutter-dart',
        name: 'Flutter + Dart',
        icon: '🦋',
        description: 'Cross-platform mobile app with Flutter and Dart',
        tags: ['Flutter', 'Dart', 'Mobile', 'Cross-Platform'],
        category: 'mobile',
        language: 'Dart',
        framework: 'Flutter',
        rules: {
            role: 'You are an expert Flutter developer building cross-platform applications with Dart.',
            stack: ['Flutter 3', 'Dart 3', 'Riverpod', 'Go Router', 'Freezed'],
            conventions: [
                'Use Riverpod for state management.',
                'Follow the feature-first folder structure: features/[name]/{data, domain, presentation}.',
                'Use `const` constructors wherever possible for performance.',
                'Use Freezed for immutable data classes and union types.',
                'Use Go Router for navigation and deep linking.',
                'Extract widgets into separate files when they exceed 80 lines.',
                'Use `async/await` for asynchronous operations.',
                'Follow Dart naming conventions: lowerCamelCase for variables, UpperCamelCase for classes.',
            ],
            avoid: [
                'Do not use `setState` for complex state — use Riverpod.',
                'Do not create deeply nested widget trees — extract widgets.',
                'Do not use `dynamic` type unless necessary.',
                'Do not ignore linter warnings.',
            ],
        },
    },
    {
        id: 'svelte-sveltekit',
        name: 'Svelte + SvelteKit',
        icon: '🔥',
        description: 'SvelteKit full-stack app with TypeScript',
        tags: ['Svelte', 'SvelteKit', 'TypeScript', 'SSR'],
        category: 'fullstack',
        language: 'TypeScript',
        framework: 'SvelteKit',
        rules: {
            role: 'You are an expert Svelte developer using SvelteKit with TypeScript.',
            stack: ['Svelte 5', 'SvelteKit', 'TypeScript', 'Tailwind CSS'],
            conventions: [
                'Use SvelteKit file-based routing in `routes/` directory.',
                'Use `+page.svelte` for pages, `+layout.svelte` for layouts, `+server.ts` for API routes.',
                'Use `load` functions in `+page.ts` or `+page.server.ts` for data fetching.',
                'Use TypeScript for all `.ts` and `<script lang="ts">` blocks.',
                'Use Svelte stores for global state.',
                'Use form actions for form handling and mutations.',
                'Keep components small and composable.',
                'Use `$:` reactive declarations for derived state.',
            ],
            avoid: [
                'Do not use `onMount` for data fetching — use `load` functions.',
                'Do not mutate store values directly outside `update()` or `set()`.',
                'Do not skip TypeScript typing.',
            ],
        },
    },
    // === NEW PRESETS BELOW ===
    {
        id: 'angular-typescript',
        name: 'Angular + TypeScript',
        icon: '🅰️',
        description: 'Enterprise Angular with TypeScript, RxJS, and signals',
        tags: ['Angular', 'TypeScript', 'RxJS', 'Signals'],
        category: 'frontend',
        language: 'TypeScript',
        framework: 'Angular',
        rules: {
            role: 'You are an expert Angular developer using TypeScript, standalone components, and signals.',
            stack: ['Angular 19+', 'TypeScript (strict)', 'RxJS', 'Angular Signals', 'NgRx'],
            conventions: [
                'Use standalone components by default — avoid NgModules.',
                'Use Angular Signals for reactive state management.',
                'Use RxJS for async streams and HTTP calls via `HttpClient`.',
                'Follow Angular style guide: feature folders, barrel exports.',
                'Use reactive forms with strong typing via `FormGroup<T>`.',
                'Use `inject()` function instead of constructor injection.',
                'Use `@defer` blocks for lazy loading components.',
                'Use Angular CLI for generating components, services, and pipes.',
                'Write unit tests with Jasmine and Karma or Jest.',
            ],
            avoid: [
                'Do not use `any` type.',
                'Do not use decorator-based injection — prefer `inject()`.',
                'Do not subscribe to observables without unsubscribing.',
                'Do not use `ngOnChanges` when signals can replace it.',
                'Do not create god-components — keep them small.',
            ],
        },
    },
    {
        id: 'laravel-php',
        name: 'Laravel + PHP',
        icon: '🔴',
        description: 'Laravel PHP framework with Eloquent and Blade',
        tags: ['PHP', 'Laravel', 'Eloquent', 'Blade'],
        category: 'fullstack',
        language: 'PHP',
        framework: 'Laravel',
        rules: {
            role: 'You are an expert Laravel developer following Laravel conventions and best practices.',
            stack: ['PHP 8.3+', 'Laravel 11', 'Eloquent ORM', 'Blade Templates', 'Livewire'],
            conventions: [
                'Follow Laravel naming conventions: PascalCase models, snake_case DB columns.',
                'Use Eloquent ORM for all database operations.',
                'Use form requests for validation logic.',
                'Use resource controllers for REST endpoints.',
                'Use Laravel\'s built-in authentication scaffolding.',
                'Use service classes for complex business logic.',
                'Use Laravel queues for background jobs.',
                'Use Blade components for reusable UI elements.',
                'Use migrations and seeders for database management.',
            ],
            avoid: [
                'Do not write raw SQL queries — use Eloquent or Query Builder.',
                'Do not put business logic in controllers — use services.',
                'Do not use `env()` outside of config files.',
                'Do not skip validation — always use form requests.',
            ],
        },
    },
    {
        id: 'ruby-rails',
        name: 'Ruby on Rails',
        icon: '💎',
        description: 'Rails full-stack with convention over configuration',
        tags: ['Ruby', 'Rails', 'ActiveRecord', 'MVC'],
        category: 'fullstack',
        language: 'Ruby',
        framework: 'Rails',
        rules: {
            role: 'You are an expert Ruby on Rails developer following Rails conventions and the Ruby way.',
            stack: ['Ruby 3.3+', 'Rails 8', 'ActiveRecord', 'Hotwire (Turbo + Stimulus)', 'PostgreSQL'],
            conventions: [
                'Follow Rails conventions: "Convention over Configuration".',
                'Use ActiveRecord for all database interactions.',
                'Use Rails generators for models, controllers, and migrations.',
                'Use Hotwire (Turbo Frames, Turbo Streams) for dynamic UI.',
                'Use concerns for shared model/controller behavior.',
                'Use service objects for complex business logic.',
                'Use Active Job for background processing.',
                'Write tests with Minitest or RSpec.',
                'Follow RESTful routing conventions.',
            ],
            avoid: [
                'Do not fight Rails conventions — embrace them.',
                'Do not use raw SQL when ActiveRecord suffices.',
                'Do not put business logic in controllers — use models or services.',
                'Do not skip database indexes for foreign keys.',
            ],
        },
    },
    {
        id: 'spring-java',
        name: 'Spring Boot + Java',
        icon: '☕',
        description: 'Enterprise Java with Spring Boot and JPA',
        tags: ['Java', 'Spring Boot', 'JPA', 'Enterprise'],
        category: 'backend',
        language: 'Java',
        framework: 'Spring Boot',
        rules: {
            role: 'You are an expert Java developer building enterprise applications with Spring Boot.',
            stack: ['Java 21+', 'Spring Boot 3', 'Spring Data JPA', 'Spring Security', 'Maven/Gradle'],
            conventions: [
                'Use Spring Boot auto-configuration wherever possible.',
                'Follow layered architecture: controller → service → repository.',
                'Use Spring Data JPA repositories for data access.',
                'Use DTOs for API request/response — never expose entities directly.',
                'Use `@RestController` for REST APIs with proper HTTP methods.',
                'Use Spring Security for authentication and authorization.',
                'Use constructor injection (not field injection with `@Autowired`).',
                'Use `@Transactional` for service methods that modify data.',
                'Write unit tests with JUnit 5 and Mockito.',
            ],
            avoid: [
                'Do not expose JPA entities in API responses.',
                'Do not use field injection — use constructor injection.',
                'Do not catch exceptions silently.',
                'Do not hardcode configuration — use `application.properties` or `application.yml`.',
            ],
        },
    },
    {
        id: 'react-native',
        name: 'React Native',
        icon: '📱',
        description: 'Cross-platform mobile with React Native and Expo',
        tags: ['React Native', 'Expo', 'Mobile', 'TypeScript'],
        category: 'mobile',
        language: 'TypeScript',
        framework: 'React Native',
        rules: {
            role: 'You are an expert React Native developer building mobile apps with Expo and TypeScript.',
            stack: ['React Native', 'Expo SDK 52+', 'TypeScript', 'React Navigation', 'Zustand'],
            conventions: [
                'Use Expo for project setup and development.',
                'Use TypeScript strict mode for all files.',
                'Use Expo Router for file-based navigation.',
                'Use `StyleSheet.create()` for all styles.',
                'Use Zustand or React Context for state management.',
                'Use `expo-image` for optimized image loading.',
                'Test on both iOS and Android simulators.',
                'Use platform-specific files (`.ios.tsx`, `.android.tsx`) when needed.',
                'Keep components under 150 lines.',
            ],
            avoid: [
                'Do not use inline styles — use `StyleSheet.create()`.',
                'Do not ignore platform differences.',
                'Do not use `any` type.',
                'Do not use deprecated APIs — check Expo docs.',
            ],
        },
    },
    {
        id: 'swift-swiftui',
        name: 'Swift + SwiftUI',
        icon: '🍎',
        description: 'Native iOS/macOS development with SwiftUI',
        tags: ['Swift', 'SwiftUI', 'iOS', 'macOS'],
        category: 'mobile',
        language: 'Swift',
        framework: 'SwiftUI',
        rules: {
            role: 'You are an expert Swift developer building native iOS and macOS apps with SwiftUI.',
            stack: ['Swift 5.9+', 'SwiftUI', 'Swift Data', 'Combine', 'Xcode 16'],
            conventions: [
                'Use SwiftUI as the primary UI framework.',
                'Use Swift Data for persistence (replaces Core Data).',
                'Follow MVVM architecture with `@Observable` macro.',
                'Use Swift concurrency (async/await, actors) for async work.',
                'Use `NavigationStack` for navigation.',
                'Keep views small — extract subviews into separate structs.',
                'Use `@Environment` and `@State` property wrappers appropriately.',
                'Use Swift Package Manager for dependencies.',
            ],
            avoid: [
                'Do not use UIKit unless SwiftUI cannot handle the requirement.',
                'Do not force-unwrap optionals — use guard/if-let.',
                'Do not use massive view bodies — extract components.',
                'Do not ignore Swift concurrency warnings.',
            ],
        },
    },
    {
        id: 'kotlin-android',
        name: 'Kotlin + Android',
        icon: '🤖',
        description: 'Native Android development with Kotlin and Jetpack Compose',
        tags: ['Kotlin', 'Android', 'Compose', 'Jetpack'],
        category: 'mobile',
        language: 'Kotlin',
        framework: 'Android',
        rules: {
            role: 'You are an expert Kotlin developer building Android apps with Jetpack Compose.',
            stack: ['Kotlin 2.0+', 'Jetpack Compose', 'Room', 'Hilt', 'Ktor/Retrofit'],
            conventions: [
                'Use Jetpack Compose for all UI — no XML layouts.',
                'Follow MVVM architecture with ViewModel and StateFlow.',
                'Use Hilt for dependency injection.',
                'Use Room for local database with Flow/StateFlow.',
                'Use Kotlin coroutines for async operations.',
                'Use Navigation Compose for screen navigation.',
                'Use Material 3 design components.',
                'Write UI previews with `@Preview` annotation.',
            ],
            avoid: [
                'Do not use XML layouts — use Compose.',
                'Do not use LiveData — prefer StateFlow.',
                'Do not block the main thread.',
                'Do not use `!!` operator — handle nullability properly.',
            ],
        },
    },
    {
        id: 'astro',
        name: 'Astro',
        icon: '🚀',
        description: 'Content-focused static site with Astro and islands',
        tags: ['Astro', 'SSG', 'Islands', 'Content'],
        category: 'frontend',
        language: 'TypeScript',
        framework: 'Astro',
        rules: {
            role: 'You are an expert Astro developer building content-focused websites with island architecture.',
            stack: ['Astro 5+', 'TypeScript', 'MDX', 'Tailwind CSS'],
            conventions: [
                'Use Astro components (`.astro` files) for static content.',
                'Use island architecture — only hydrate interactive components.',
                'Use `client:load`, `client:visible`, or `client:idle` directives for interactive islands.',
                'Use content collections for structured content (blog posts, docs).',
                'Use TypeScript for type-safe frontmatter and props.',
                'Use `getStaticPaths()` for dynamic routes.',
                'Use Astro\'s built-in image optimization.',
                'Keep pages zero-JS by default.',
            ],
            avoid: [
                'Do not ship unnecessary JavaScript to the client.',
                'Do not use `client:load` on components that don\'t need interactivity.',
                'Do not use heavy frameworks for static content.',
                'Do not skip image optimization.',
            ],
        },
    },
    {
        id: 'remix-react',
        name: 'Remix + React',
        icon: '💿',
        description: 'Full-stack React framework with nested routing',
        tags: ['Remix', 'React', 'TypeScript', 'Full-Stack'],
        category: 'fullstack',
        language: 'TypeScript',
        framework: 'Remix',
        rules: {
            role: 'You are an expert Remix developer building full-stack React applications with nested routing.',
            stack: ['Remix 2+', 'React 19', 'TypeScript', 'Prisma', 'Tailwind CSS'],
            conventions: [
                'Use file-based routing in `app/routes/` directory.',
                'Use `loader` functions for data fetching (GET requests).',
                'Use `action` functions for data mutations (POST/PUT/DELETE).',
                'Use Remix `Form` component instead of native HTML forms.',
                'Use nested routes and `<Outlet>` for layout composition.',
                'Use `useLoaderData` and `useActionData` for type-safe data access.',
                'Use error boundaries with `ErrorBoundary` export.',
                'Use `meta` export for page-level SEO metadata.',
                'Use progressive enhancement — forms should work without JS.',
            ],
            avoid: [
                'Do not use `useEffect` for data fetching — use loaders.',
                'Do not use client-side state for server data.',
                'Do not skip error boundaries.',
                'Do not use `any` type.',
            ],
        },
    },
    {
        id: 't3-stack',
        name: 'T3 Stack',
        icon: '🔺',
        description: 'Next.js + tRPC + Prisma + Tailwind full-stack',
        tags: ['T3', 'tRPC', 'Prisma', 'Next.js'],
        category: 'fullstack',
        language: 'TypeScript',
        framework: 'T3 Stack',
        rules: {
            role: 'You are an expert T3 stack developer using Next.js, tRPC, Prisma, and Tailwind CSS for full-stack type-safe applications.',
            stack: ['Next.js (App Router)', 'tRPC v11', 'Prisma ORM', 'Tailwind CSS', 'NextAuth.js'],
            conventions: [
                'Use tRPC for end-to-end type-safe APIs — no REST endpoints.',
                'Use Prisma for database schema and type-safe queries.',
                'Use Zod for input validation in tRPC procedures.',
                'Use NextAuth.js for authentication.',
                'Use Tailwind CSS for styling.',
                'Define tRPC routers in `server/api/routers/`.',
                'Use `createTRPCRouter` and `protectedProcedure` for auth-guarded routes.',
                'Keep tRPC procedures thin — delegate to service functions.',
                'Use Prisma migrations for schema changes.',
            ],
            avoid: [
                'Do not create REST API routes when tRPC can handle it.',
                'Do not use `any` — leverage tRPC\'s type inference.',
                'Do not write raw SQL — use Prisma.',
                'Do not skip Zod validation on tRPC inputs.',
            ],
        },
    },
];

// Rule generation engine
export function generateRules(preset, ide, toggles) {
    const rules = preset.rules;
    const ideMeta = IDE_OPTIONS.find((i) => i.id === ide);

    let output = '';

    switch (ide) {
        case 'cursor':
            output = generateMarkdownRules(rules, toggles, 'cursor');
            break;
        case 'windsurf':
            output = generateWindsurfRules(rules, toggles);
            break;
        case 'claude':
            output = generateClaudeRules(rules, toggles);
            break;
        case 'copilot':
            output = generateCopilotRules(rules, toggles);
            break;
        case 'cline':
            output = generateMarkdownRules(rules, toggles, 'cline');
            break;
        case 'zed':
            output = generateMarkdownRules(rules, toggles, 'zed');
            break;
        case 'aider':
            output = generateAiderRules(rules, toggles);
            break;
        case 'continue':
            output = generateContinueRules(rules, toggles);
            break;
        case 'devin':
            output = generateMarkdownRules(rules, toggles, 'devin');
            break;
        case 'amazonq':
            output = generateMarkdownRules(rules, toggles, 'amazonq');
            break;
        case 'bolt':
            output = generateMarkdownRules(rules, toggles, 'bolt');
            break;
        case 'lovable':
            output = generateMarkdownRules(rules, toggles, 'lovable');
            break;
        case 'replit':
            output = generateMarkdownRules(rules, toggles, 'replit');
            break;
        case 'augment':
            output = generateMarkdownRules(rules, toggles, 'augment');
            break;
        case 'jetbrains':
            output = generateMarkdownRules(rules, toggles, 'jetbrains');
            break;
        default:
            output = generateMarkdownRules(rules, toggles, 'cursor');
    }

    return { content: output, filename: ideMeta?.file || '.cursorrules' };
}

function buildToggleRules(toggles) {
    const lines = [];
    if (toggles.typescript_strict) lines.push('- Use TypeScript strict mode. Define types for all variables, parameters, and return values.');
    if (toggles.no_any) lines.push('- Never use the `any` type. Use `unknown` if the type is truly uncertain, then narrow it.');
    if (toggles.prefer_const) lines.push('- Use `const` by default. Only use `let` when reassignment is needed. Never use `var`.');
    if (toggles.functional) lines.push('- Prefer functional components and pure functions over classes.');
    if (toggles.no_comments) lines.push('- Only add comments for complex business logic. Code should be self-documenting through clear naming.');
    if (toggles.error_handling) lines.push('- Always handle errors explicitly. Use try/catch for async operations. Never silently swallow errors.');
    if (toggles.early_return) lines.push('- Use early returns (guard clauses) to reduce nesting and improve readability.');
    if (toggles.descriptive_names) lines.push('- Use descriptive, meaningful names for variables, functions, and classes. Avoid abbreviations.');
    if (toggles.small_functions) lines.push('- Keep functions small and focused. Each function should do one thing. Aim for under 50 lines.');
    if (toggles.immutable) lines.push('- Prefer immutable data patterns. Use spread operators, Object.freeze(), or immutable libraries.');
    return lines;
}

// Generic Markdown rules generator — works for Cursor, Cline, Zed, Devin, Amazon Q, Bolt, Lovable, Replit, Augment, JetBrains
function generateMarkdownRules(rules, toggles, ideName) {
    const toggleRules = buildToggleRules(toggles);
    return `# Role
${rules.role}

# Tech Stack
${rules.stack.map((s) => `- ${s}`).join('\n')}

# Code Conventions
${rules.conventions.map((c) => `- ${c}`).join('\n')}

# Code Style Preferences
${toggleRules.join('\n')}

# What to Avoid
${rules.avoid.map((a) => `- ${a}`).join('\n')}
`;
}

function generateWindsurfRules(rules, toggles) {
    const toggleRules = buildToggleRules(toggles);
    return `---
trigger: always_on
---

# Role
${rules.role}

# Tech Stack
${rules.stack.map((s) => `- ${s}`).join('\n')}

# Coding Conventions
${rules.conventions.map((c) => `- ${c}`).join('\n')}

# Style Preferences
${toggleRules.join('\n')}

# Avoid
${rules.avoid.map((a) => `- ${a}`).join('\n')}
`;
}

function generateClaudeRules(rules, toggles) {
    const toggleRules = buildToggleRules(toggles);
    return `# CLAUDE.md

## About This Project
${rules.role}

## Tech Stack
${rules.stack.map((s) => `- ${s}`).join('\n')}

## Coding Conventions
${rules.conventions.map((c) => `- ${c}`).join('\n')}

## Style Guidelines
${toggleRules.join('\n')}

## Anti-Patterns (Avoid These)
${rules.avoid.map((a) => `- ${a}`).join('\n')}
`;
}

function generateCopilotRules(rules, toggles) {
    const toggleRules = buildToggleRules(toggles);
    return `# GitHub Copilot Instructions

## Context
${rules.role}

## Tech Stack
${rules.stack.map((s) => `- ${s}`).join('\n')}

## Conventions to Follow
${rules.conventions.map((c) => `- ${c}`).join('\n')}

## Code Style
${toggleRules.join('\n')}

## Do Not
${rules.avoid.map((a) => `- ${a}`).join('\n')}
`;
}

function generateAiderRules(rules, toggles) {
    const toggleRules = buildToggleRules(toggles);
    return `# Aider Configuration

## Role
${rules.role}

## Tech Stack
${rules.stack.map((s) => `- ${s}`).join('\n')}

## Coding Conventions
${rules.conventions.map((c) => `- ${c}`).join('\n')}

## Style Preferences
${toggleRules.join('\n')}

## Avoid
${rules.avoid.map((a) => `- ${a}`).join('\n')}
`;
}

function generateContinueRules(rules, toggles) {
    const toggleRules = buildToggleRules(toggles);
    return `# Continue.dev Rules

## Context
${rules.role}

## Tech Stack
${rules.stack.map((s) => `- ${s}`).join('\n')}

## Coding Standards
${rules.conventions.map((c) => `- ${c}`).join('\n')}

## Preferences
${toggleRules.join('\n')}

## Anti-Patterns
${rules.avoid.map((a) => `- ${a}`).join('\n')}
`;
}
