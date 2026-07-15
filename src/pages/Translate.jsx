import React, { useEffect, useState } from 'react'

const Translate = () => {
    const [languages, setLanguages] = useState([])
    let [fromLanguage, setFromLanguage] = useState('en')
    let [toLanguage, setToLanguage] = useState('en')
    let [input, setInput] = useState('')
    let [output, setOutput] = useState('')

    useEffect(() => {
        const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '73858d0151msh8bee677ef926c60p155007jsn03c6ca43bdf2',
                'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
                'Content-Type': 'application/json'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(result => setLanguages(result))
            .catch(error => console.error(error));

        // try {
        //     const response = await fetch(url, options);
        //     const result = await response.text();
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        // }
    }, [])

    const translate = (e) => {
        e.preventDefault()
        const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '73858d0151msh8bee677ef926c60p155007jsn03c6ca43bdf2',
                'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //JSON.stringify is needed to be added manually because the body is an object and it needs to be converted to a string before sending it to the server.
                from: fromLanguage,
                to: toLanguage,
                text: input
            })
        };

        fetch(url, options)
            .then(response => response.json())
            .then(result => setOutput(result.trans))
            .catch(error => console.error(error));

        // try {
        //     const response = await fetch(url, options);
        //     const result = await response.text();
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        // }
    }


    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
            <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Language Translator
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Translate text into your preferred language instantly.
                    </p>
                </div>

                <div className="space-y-5">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Select From Language
                        </label>
                        <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" onChange={e => setFromLanguage(e.target.value)}>
                            {
                                languages.length > 0 &&
                                languages.map((language, i) => {
                                    return <option key={i} value={language.code}>
                                        {language.language}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Select To Language
                        </label>
                        <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" onChange={e => setToLanguage(e.target.value)}>
                            {
                                languages.length > 0 &&
                                languages.map((language, i) => {
                                    return <option key={i} value={language.code}>
                                        {language.language}
                                    </option>
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Text to Translate
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your text here..."
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>

                    <button className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 active:scale-[0.99]" onClick={translate}>
                        Translate
                    </button>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Translated Text
                        </label>
                        <input value={output}
                            type="text"
                            placeholder="Translated text will appear here..."
                            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Translate