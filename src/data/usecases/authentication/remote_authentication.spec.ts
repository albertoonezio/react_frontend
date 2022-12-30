import { RemoteAuthentication } from "./remote_authentication"
import { HttpPostClientSpy } from "../../test/mock_http_client"

describe('RemoteAuthentication', () => {
	test('Should call HttpClient with correct URL', async () => {
		const url = 'http://localhost'
		const httpPostClientSpy = new HttpPostClientSpy()
		const sut = new RemoteAuthentication(url, httpPostClientSpy)
		sut.auth()
		expect(httpPostClientSpy.url).toBe(url)
	})
})