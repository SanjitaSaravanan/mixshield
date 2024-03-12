<div className="col-12 col-md-6 p-4 bg-fix text-center">
              <div className="text-center display-6">Send Message</div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control bg-fix"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-3">
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control bg-fix"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control bg-fix"
                    placeholder="Type your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            </div>