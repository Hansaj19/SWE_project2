import { useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ImagePlus, Sparkles, TriangleAlert, UploadCloud } from 'lucide-react'
import { analysisSnapshot } from '../../data/mockData'

function UploadAnalysisPanel() {
  const [selectedFile, setSelectedFile] = useState(null)
  const previewUrl = useMemo(
    () => (selectedFile ? URL.createObjectURL(selectedFile) : null),
    [selectedFile],
  )

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0] ?? null)
    },
  })

  return (
    <section className="grid gap-5 xl:grid-cols-2">
      <article className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">Photo Upload</p>
            <h3 className="text-2xl font-bold text-slate-900">Drag and Drop Meal Image</h3>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">PNG / JPG / WEBP</span>
        </div>

        <div
          {...getRootProps()}
          className={`grid min-h-[360px] cursor-pointer place-items-center rounded-3xl border-2 border-dashed p-6 text-center transition ${
            isDragActive
              ? 'border-emerald-400 bg-emerald-50'
              : 'border-emerald-200 bg-[linear-gradient(165deg,#f6fff9,#eef6ff)]'
          }`}
        >
          <input {...getInputProps()} />

          {previewUrl ? (
            <div className="w-full space-y-4">
              <img
                src={previewUrl}
                alt="Uploaded meal"
                className="mx-auto h-[270px] w-full rounded-2xl object-cover"
              />
              <p className="text-sm text-slate-500">{selectedFile?.name}</p>
            </div>
          ) : (
            <div className="max-w-sm">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                <UploadCloud size={30} />
              </div>
              <p className="text-lg font-semibold text-slate-800">Drop your meal photo here</p>
              <p className="mt-2 text-sm text-slate-500">Or click to browse from your device</p>
            </div>
          )}
        </div>
      </article>

      <article className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">AI Output</p>
            <h3 className="text-2xl font-bold text-slate-900">Quality and Portion Analysis</h3>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
          >
            <Sparkles size={16} />
            Run Analyzer
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.11em] text-emerald-600">Quality Score</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{analysisSnapshot.qualityScore} / 5</p>
            </div>
            <div className="rounded-2xl bg-blue-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.11em] text-blue-600">Portion Accuracy</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{analysisSnapshot.portionScore}%</p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-600">Detected Items</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {analysisSnapshot.detectedItems.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700">
                  <ImagePlus size={14} className="mr-1 inline" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-700">Flags</p>
            <ul className="mt-2 space-y-2 text-sm text-amber-800">
              {analysisSnapshot.flags.map((flag) => (
                <li key={flag} className="flex items-start gap-2">
                  <TriangleAlert size={15} className="mt-0.5 shrink-0" />
                  {flag}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-700">AI Recommendation</p>
            <p className="mt-2 text-sm text-emerald-900">{analysisSnapshot.recommendation}</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default UploadAnalysisPanel
