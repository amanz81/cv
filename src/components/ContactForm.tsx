import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 flex items-center justify-center text-4xl font-bold text-slate-800">
            <span className="mr-4 h-10 w-2 rounded-full bg-slate-800"></span>
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            If you are hiring for senior platform, DevOps, or infrastructure leadership,
            I am open to discussing roles where strong engineering judgment, operational
            discipline, and hands-on execution matter.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the role, team, or challenge you want to solve..."
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-slate-800 hover:to-slate-900 hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <p className="mb-4 text-slate-600">Or contact me directly:</p>
            <a
              href="mailto:assaf.manzur@gmail.com"
              className="text-lg font-medium text-blue-600 hover:text-blue-800"
            >
              assaf.manzur@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
