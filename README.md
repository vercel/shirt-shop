# Shirt Shop

## A `@vercel/flags/next` example

This example shows how to use `@vercel/flags` for Next.js applications.

This application requires a `FLAGS_SECRET` environment variable.

You can generate one with this command

```sh
node -e "console.log(crypto.randomBytes(32).toString('base64url'))"
```

When running locally, you will need to run `vercel link` to link one of your Vercel projects. The environment variable mentioned above need to be defined on the linked project in the Vercel dashboard. Run Having them in local `.env` files is not enough.

- [Documentation](https://vercel.com/docs/workflow-collaboration/feature-flags/flags-pattern-nextjs)
- [Live Demo](https://shirt-shop.labs.vercel.dev/)

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=shirt-shop):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/shirt-shop&project-name=shirt-shop&repository-name=shirt-shop&env=FLAGS_SECRET)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/vercel/shirt-shop
```

Next, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=shirt-shop) ([Documentation](https://nextjs.org/docs/deployment)).

## Acknowledgements & Credits

Thanks to following for a delightful demo:

* [Tailwind UI ecommerce product page example](https://tailwindui.com/components/ecommerce/page-examples/product-pages)
* Images provided by [Ugmonk](https://ugmonk.com/)
