describe('Ecommmerce Application', async() =>
{
    it('Login failed page', async() =>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        //css selector, xpath
        browser.pause(300000)
        await $("input[name='username']").setValue("rahulshettyacademy")
        browser.pause(300000)
        await $("#username").setValue("testing123")
        browser.pause(310000)
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        browser.pause(4000)
        await $("#signInBtn").click()
        await console.log(await $(".alert-danger").getText())
        await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === "Sign In",
        {
            timeout:5000,
            timeoutMsg: "Error message is not showing up"
        })

        await console.log(await $(".alert-danger").getText())
    })


})